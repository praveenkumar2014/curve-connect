import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { CreditCard, Smartphone, QrCode, ArrowLeft, Loader2, Wallet, CheckCircle } from 'lucide-react';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const UPI_ID = '8884162999-4@ybl';

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

  const generateUPIQR = (amt: number): string => {
    const upiUrl = `upi://pay?pa=${encodeURIComponent(UPI_ID)}&pn=${encodeURIComponent('GSMODELING')}&am=${amt}&cu=INR&tn=${encodeURIComponent('GSMODELING Registration Fee')}`;
    // Generate QR via Google Charts API (free, no dependency)
    return `https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${encodeURIComponent(upiUrl)}&choe=UTF-8`;
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
      paymentSchema.parse({ amount: parsedAmount, paymentMethod });
      setLoading(true);

      const txnId = `GSM${Date.now()}${Math.random().toString(36).slice(2, 6).toUpperCase()}`;

      // Generate QR for UPI methods
      if (['upi', 'phonepe', 'gpay'].includes(paymentMethod)) {
        const qr = generateUPIQR(parsedAmount);
        setQrCodeUrl(qr);
      }

      // Record payment in database
      const { error } = await supabase.from('payments').insert({
        user_id: user.id,
        amount: parsedAmount,
        payment_method: paymentMethod,
        transaction_id: txnId,
        payment_status: 'pending',
        qr_code_url: paymentMethod === 'upi' ? `upi://${UPI_ID}` : null,
      });

      if (error) throw error;

      setTransactionId(txnId);
      toast.success('Payment initiated! Scan QR to complete.');
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
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container max-w-5xl px-6 lg:px-12">
          <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold font-display mb-3">GSMODELING Registration</h1>
            <p className="text-xl text-muted-foreground">Annual Registration Fee — ₹999</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Payment Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
              <Card className="p-8 glass">
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
                      className="text-lg font-semibold h-12"
                    />
                    <p className="text-sm text-muted-foreground">Standard registration fee for 1 year</p>
                  </div>

                  <div className="space-y-2">
                    <Label>Select Payment Method</Label>
                    <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Choose payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="upi">
                          <span className="flex items-center gap-2"><QrCode className="h-4 w-4 text-primary" /> UPI (QR Code)</span>
                        </SelectItem>
                        <SelectItem value="phonepe">
                          <span className="flex items-center gap-2"><Wallet className="h-4 w-4 text-primary" /> PhonePe</span>
                        </SelectItem>
                        <SelectItem value="gpay">
                          <span className="flex items-center gap-2"><Smartphone className="h-4 w-4 text-primary" /> Google Pay</span>
                        </SelectItem>
                        <SelectItem value="card">
                          <span className="flex items-center gap-2"><CreditCard className="h-4 w-4 text-primary" /> Credit/Debit Card</span>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 gradient-bg text-white"
                    size="lg"
                    disabled={loading || !amount || !paymentMethod}
                  >
                    {loading ? (
                      <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...</>
                    ) : (
                      `Proceed to Pay ₹${amount}`
                    )}
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-primary/5 border border-primary/10 rounded-lg">
                  <p className="text-sm font-medium mb-1 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" /> Secure Payment
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Your payment information is encrypted. UPI ID: {UPI_ID}
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* QR Code / Info */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <Card className="p-8 glass">
                {qrCodeUrl ? (
                  <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Scan QR Code to Pay</h2>
                    <p className="text-muted-foreground mb-6">
                      Use {paymentMethod.toUpperCase()} to scan and pay
                    </p>

                    <div className="bg-white p-4 rounded-xl inline-block mb-6 shadow-lg">
                      <img src={qrCodeUrl} alt="Payment QR Code" className="w-64 h-64" />
                    </div>

                    <div className="space-y-3 text-left bg-muted/50 p-4 rounded-lg text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Amount:</span>
                        <span className="font-bold text-lg">₹{amount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">UPI ID:</span>
                        <span className="font-mono text-xs">{UPI_ID}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Transaction ID:</span>
                        <span className="font-mono text-xs">{transactionId}</span>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        ⏱️ Payment will be verified within 5–10 minutes. Confirmation via email.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <QrCode className="h-20 w-20 text-primary/40 mx-auto mb-6" />
                    <h2 className="text-2xl font-semibold mb-3">Choose Payment Method</h2>
                    <p className="text-muted-foreground mb-8">
                      Select your preferred payment method to generate QR
                    </p>

                    <div className="space-y-3 text-left">
                      {[
                        { icon: QrCode, title: 'UPI Payment', desc: 'Instant via QR code' },
                        { icon: Smartphone, title: 'PhonePe & Google Pay', desc: 'Quick mobile payments' },
                        { icon: CreditCard, title: 'Card Payment', desc: 'Credit/Debit cards' },
                      ].map(({ icon: Icon, title, desc }) => (
                        <div key={title} className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                          <Icon className="h-6 w-6 text-primary flex-shrink-0" />
                          <div>
                            <p className="font-medium text-sm">{title}</p>
                            <p className="text-xs text-muted-foreground">{desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 p-4 bg-primary/5 rounded-lg text-left">
                      <p className="text-sm font-medium mb-2">What you get:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>✓ Full platform access for 1 year</li>
                        <li>✓ Unlimited portfolio uploads</li>
                        <li>✓ AI-powered profile matching</li>
                        <li>✓ Priority support</li>
                      </ul>
                    </div>
                  </div>
                )}
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Payment;
