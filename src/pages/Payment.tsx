import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { CreditCard, Smartphone, QrCode, ArrowLeft, Loader2 } from 'lucide-react';
import QRCode from 'qrcode';
import { z } from 'zod';

const paymentSchema = z.object({
  amount: z.number().min(1, 'Amount must be at least ₹1').max(1000000, 'Amount too large'),
  paymentMethod: z.string().min(1, 'Please select a payment method'),
});

const Payment = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [loading, setLoading] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [transactionId, setTransactionId] = useState('');

  const generateUPIQR = async (amt: number) => {
    // UPI Payment URL format
    const upiId = 'gsmodeling@ybl'; // Your UPI ID (masked)
    const name = 'GSMODELING';
    const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amt}&cu=INR&tn=${encodeURIComponent('GSMODELING Payment')}`;
    
    try {
      const qr = await QRCode.toDataURL(upiUrl, {
        width: 300,
        margin: 2,
      });
      return qr;
    } catch (error) {
      console.error('Error generating QR code:', error);
      return '';
    }
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast.error('Please sign in to make a payment');
      navigate('/auth');
      return;
    }

    try {
      const parsedAmount = parseFloat(amount);
      
      paymentSchema.parse({
        amount: parsedAmount,
        paymentMethod,
      });

      setLoading(true);
      const txnId = `TXN${Date.now()}`;
      setTransactionId(txnId);

      if (paymentMethod === 'upi' || paymentMethod === 'phonepe' || paymentMethod === 'gpay') {
        const qr = await generateUPIQR(parsedAmount);
        setQrCodeUrl(qr);
      }

      // Create payment record
      const { error } = await supabase.from('payments').insert({
        user_id: user.id,
        amount: parsedAmount,
        currency: 'INR',
        payment_method: paymentMethod,
        payment_status: 'pending',
        transaction_id: txnId,
        qr_code_url: paymentMethod.includes('upi') || paymentMethod.includes('phonepe') || paymentMethod.includes('gpay') ? qrCodeUrl : null,
      });

      if (error) throw error;

      toast.success('Payment initiated successfully!');
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error('Failed to initiate payment');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-secondary/30 py-12">
      <div className="container max-w-4xl px-6 lg:px-12">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Payment Form */}
          <Card className="p-8">
            <h1 className="text-3xl font-bold mb-6">Make Payment</h1>
            
            <form onSubmit={handlePayment} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="amount">Amount (₹)</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="1000"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  min="1"
                  step="0.01"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="method">Payment Method</Label>
                <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="upi">
                      <div className="flex items-center gap-2">
                        <QrCode className="h-4 w-4" />
                        UPI
                      </div>
                    </SelectItem>
                    <SelectItem value="phonepe">
                      <div className="flex items-center gap-2">
                        <Smartphone className="h-4 w-4" />
                        PhonePe
                      </div>
                    </SelectItem>
                    <SelectItem value="gpay">
                      <div className="flex items-center gap-2">
                        <Smartphone className="h-4 w-4" />
                        Google Pay
                      </div>
                    </SelectItem>
                    <SelectItem value="card">
                      <div className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4" />
                        Credit/Debit Card
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                variant="gold"
                className="w-full"
                size="lg"
                disabled={loading || !amount || !paymentMethod}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  'Continue to Payment'
                )}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                🔒 Secure payment processing. Your payment information is encrypted and secure.
              </p>
            </div>
          </Card>

          {/* QR Code / Payment Info */}
          <Card className="p-8">
            {qrCodeUrl ? (
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Scan to Pay</h2>
                <p className="text-muted-foreground mb-6">
                  Scan this QR code with your {paymentMethod.toUpperCase()} app
                </p>
                
                <div className="bg-white p-6 rounded-lg inline-block mb-6">
                  <img src={qrCodeUrl} alt="Payment QR Code" className="w-full max-w-xs" />
                </div>

                <div className="space-y-2 text-sm">
                  <p className="font-semibold">Amount: ₹{amount}</p>
                  <p className="text-muted-foreground">Transaction ID: {transactionId}</p>
                </div>

                <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                  <p className="text-sm">
                    After completing payment, it may take a few minutes to reflect in your account.
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <QrCode className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h2 className="text-xl font-semibold mb-2">Select Payment Method</h2>
                <p className="text-muted-foreground">
                  Choose your preferred payment method and enter the amount to continue
                </p>
                
                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    <QrCode className="h-5 w-5 text-accent" />
                    <span className="text-sm">Instant UPI payments</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    <Smartphone className="h-5 w-5 text-accent" />
                    <span className="text-sm">PhonePe & Google Pay</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    <CreditCard className="h-5 w-5 text-accent" />
                    <span className="text-sm">Card payments</span>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Payment;
