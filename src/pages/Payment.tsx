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
import { CreditCard, Smartphone, QrCode, ArrowLeft, Loader2, Wallet } from 'lucide-react';
import QRCode from 'qrcode';
import { z } from 'zod';

const paymentSchema = z.object({
  amount: z.number().min(1, 'Amount must be at least ₹1').max(1000000, 'Amount too large'),
  paymentMethod: z.string().min(1, 'Please select a payment method'),
});

const Payment = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [amount, setAmount] = useState('999');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [loading, setLoading] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [transactionId, setTransactionId] = useState('');

  const generateUPIQR = async (amt: number) => {
    // UPI Payment URL format
    const upiId = 'gsmodeling@paytm'; // Your UPI ID
    const name = 'GSMODELING';
    const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amt}&cu=INR&tn=${encodeURIComponent('GSMODELING Registration Fee')}`;
    
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

      // Generate QR code if UPI payment
      if (['upi', 'phonepe', 'gpay'].includes(paymentMethod)) {
        const qr = await generateUPIQR(parsedAmount);
        setQrCodeUrl(qr);
      }

      // Call server-side payment initiation for validation
      const { data, error } = await supabase.functions.invoke('initiate-payment', {
        body: {
          amount: parsedAmount,
          paymentMethod: paymentMethod,
        }
      });

      if (error) throw error;

      if (data?.success) {
        setTransactionId(data.payment.transaction_id);
        toast.success('Payment initiated successfully!');
      } else {
        throw new Error(data?.error || 'Payment initiation failed');
      }
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('Failed to initiate payment');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-secondary/30 py-12">
      <div className="container max-w-5xl px-6 lg:px-12">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-3">GSMODELING Registration</h1>
          <p className="text-xl text-muted-foreground">Annual Registration Fee - ₹999</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Payment Form */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Payment Details</h2>
            
            <form onSubmit={handlePayment} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="amount">Amount (₹)</Label>
                <Input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  min="1"
                  step="0.01"
                  className="text-lg font-semibold"
                />
                <p className="text-sm text-muted-foreground">Standard registration fee for 1 year</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="method">Select Payment Method</Label>
                <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Choose payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="upi">
                      <div className="flex items-center gap-3 py-1">
                        <QrCode className="h-5 w-5 text-accent" />
                        <span className="font-medium">UPI</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="phonepe">
                      <div className="flex items-center gap-3 py-1">
                        <Wallet className="h-5 w-5 text-accent" />
                        <span className="font-medium">PhonePe</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="gpay">
                      <div className="flex items-center gap-3 py-1">
                        <Smartphone className="h-5 w-5 text-accent" />
                        <span className="font-medium">Google Pay</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="razorpay">
                      <div className="flex items-center gap-3 py-1">
                        <CreditCard className="h-5 w-5 text-accent" />
                        <span className="font-medium">Razorpay (Card/UPI/Netbanking)</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="cashfree">
                      <div className="flex items-center gap-3 py-1">
                        <CreditCard className="h-5 w-5 text-accent" />
                        <span className="font-medium">Cashfree (Card/Wallet)</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="card">
                      <div className="flex items-center gap-3 py-1">
                        <CreditCard className="h-5 w-5 text-accent" />
                        <span className="font-medium">Credit/Debit Card</span>
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
                    Processing Payment...
                  </>
                ) : (
                  'Proceed to Pay ₹' + amount
                )}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-accent/10 border border-accent/20 rounded-lg">
              <p className="text-sm text-foreground font-medium mb-2">✓ Secure Payment</p>
              <p className="text-xs text-muted-foreground">
                Your payment information is encrypted and secure. We accept all major payment methods.
              </p>
            </div>
          </Card>

          {/* QR Code / Payment Info */}
          <Card className="p-8">
            {qrCodeUrl ? (
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Scan QR Code to Pay</h2>
                <p className="text-muted-foreground mb-6">
                  Use your {paymentMethod.toUpperCase()} app to scan and complete payment
                </p>
                
                <div className="bg-white p-6 rounded-xl inline-block mb-6 shadow-lg">
                  <img src={qrCodeUrl} alt="Payment QR Code" className="w-full max-w-xs" />
                </div>

                <div className="space-y-3 text-left bg-muted p-4 rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Amount:</span>
                    <span className="font-bold text-lg">₹{amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Transaction ID:</span>
                    <span className="font-mono text-sm">{transactionId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Method:</span>
                    <span className="font-medium uppercase">{paymentMethod}</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    ⏱️ Payment will be verified within 5-10 minutes. You'll receive confirmation via email.
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <QrCode className="h-20 w-20 text-accent mx-auto mb-6" />
                <h2 className="text-2xl font-semibold mb-3">Choose Payment Method</h2>
                <p className="text-muted-foreground mb-8">
                  Select your preferred payment method to continue with registration
                </p>
                
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3 p-4 bg-muted rounded-lg border-2 border-transparent hover:border-accent transition-colors">
                    <QrCode className="h-6 w-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-medium">UPI Payment</p>
                      <p className="text-sm text-muted-foreground">Instant payment via QR code</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-muted rounded-lg border-2 border-transparent hover:border-accent transition-colors">
                    <Smartphone className="h-6 w-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-medium">PhonePe & Google Pay</p>
                      <p className="text-sm text-muted-foreground">Quick mobile payments</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-muted rounded-lg border-2 border-transparent hover:border-accent transition-colors">
                    <CreditCard className="h-6 w-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-medium">Cards & Gateways</p>
                      <p className="text-sm text-muted-foreground">Razorpay, Cashfree, Card payments</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-accent/10 rounded-lg">
                  <p className="text-sm font-medium mb-2">What you get:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 text-left">
                    <li>✓ Full platform access for 1 year</li>
                    <li>✓ Unlimited portfolio uploads</li>
                    <li>✓ AI-powered profile matching</li>
                    <li>✓ Priority support</li>
                  </ul>
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
