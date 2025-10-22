import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Wallet, CheckCircle2, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/components/ui/sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const MembershipFeePage = () => {
  // Fixed membership fee (in BDT)
  const MEMBERSHIP_FEE = 500;

  // Payment gateway numbers
  const BKASH_NUMBER = "01712345678";
  const NAGAD_NUMBER = "01712345678";

  const [formData, setFormData] = useState({
    name: "",
    department: "",
    batch: "",
    paymentMethod: "",
    transactionId: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("");

  // Replace this URL with your Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE";

  const departments = [
    "Computer Science & Engineering",
    "Electrical & Electronic Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Chemical Engineering",
    "Industrial & Production Engineering",
    "Architecture",
    "Other"
  ];

  const handlePaymentMethodSelect = (method: string) => {
    setSelectedMethod(method);
    setFormData({ ...formData, paymentMethod: method });
    setShowPaymentInfo(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.department || !formData.batch || !formData.paymentMethod || !formData.transactionId) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const paymentData = {
        ...formData,
        amount: MEMBERSHIP_FEE
      };

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData)
      });

      toast.success("Payment information submitted successfully! We'll verify and confirm shortly.");
      
      // Reset form
      setFormData({
        name: "",
        department: "",
        batch: "",
        paymentMethod: "",
        transactionId: ""
      });
      setShowPaymentInfo(false);
      setSelectedMethod("");

    } catch (error) {
      console.error('Error submitting payment:', error);
      toast.error("Failed to submit payment information. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <Link to="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 tracking-tight">
              Membership Fee
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our robotics community by paying the annual membership fee. Get access to workshops, equipment, and competitions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Fee Information Card */}
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5">
              <CardHeader className="text-center pb-8">
                <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Wallet className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-3xl">Annual Membership</CardTitle>
                <CardDescription className="text-lg mt-2">
                  Valid for one academic year
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-6xl font-bold text-primary mb-6">
                  ৳{MEMBERSHIP_FEE}
                </div>
                <div className="space-y-4 text-left bg-background/50 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-3 text-center">Membership Benefits:</h3>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Access to all workshops and training sessions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Use of team equipment and workspace</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Participation in competitions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Mentorship from senior members</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Certificate of membership</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Form Card */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-2xl">Payment Information</CardTitle>
                <CardDescription>
                  Fill in your details and complete the payment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="department">Department *</Label>
                    <Select
                      value={formData.department}
                      onValueChange={(value) => setFormData({ ...formData, department: value })}
                      disabled={isSubmitting}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept} value={dept}>
                            {dept}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="batch">Batch Number *</Label>
                    <Input
                      id="batch"
                      placeholder="e.g., 2023"
                      value={formData.batch}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Payment Method *</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        type="button"
                        variant={formData.paymentMethod === "bKash" ? "default" : "outline"}
                        className="h-20 text-lg font-semibold"
                        onClick={() => handlePaymentMethodSelect("bKash")}
                        disabled={isSubmitting}
                      >
                        <div className="flex flex-col items-center">
                          <span className="text-2xl mb-1">📱</span>
                          <span>bKash</span>
                        </div>
                      </Button>
                      <Button
                        type="button"
                        variant={formData.paymentMethod === "Nagad" ? "default" : "outline"}
                        className="h-20 text-lg font-semibold"
                        onClick={() => handlePaymentMethodSelect("Nagad")}
                        disabled={isSubmitting}
                      >
                        <div className="flex flex-col items-center">
                          <span className="text-2xl mb-1">💳</span>
                          <span>Nagad</span>
                        </div>
                      </Button>
                    </div>
                  </div>

                  {formData.paymentMethod && (
                    <div className="space-y-2 animate-in fade-in duration-300">
                      <Label htmlFor="transactionId">Transaction ID *</Label>
                      <Input
                        id="transactionId"
                        placeholder="Enter transaction ID"
                        value={formData.transactionId}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        required
                      />
                      <p className="text-sm text-muted-foreground">
                        Enter the transaction ID from your {formData.paymentMethod} payment
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg h-12"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Payment Information"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Instructions Card */}
          <Card className="border-border bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-primary" />
                Payment Instructions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg text-primary">For bKash:</h3>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-foreground/80">
                    <li>Open your bKash app</li>
                    <li>Select "Send Money"</li>
                    <li>Enter number: <span className="font-mono font-semibold text-foreground">{BKASH_NUMBER}</span></li>
                    <li>Enter amount: <span className="font-semibold text-foreground">৳{MEMBERSHIP_FEE}</span></li>
                    <li>Add reference: Your name</li>
                    <li>Complete the payment</li>
                    <li>Copy the Transaction ID</li>
                    <li>Fill the form with your details and Transaction ID</li>
                  </ol>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg text-primary">For Nagad:</h3>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-foreground/80">
                    <li>Open your Nagad app</li>
                    <li>Select "Send Money"</li>
                    <li>Enter number: <span className="font-mono font-semibold text-foreground">{NAGAD_NUMBER}</span></li>
                    <li>Enter amount: <span className="font-semibold text-foreground">৳{MEMBERSHIP_FEE}</span></li>
                    <li>Add reference: Your name</li>
                    <li>Complete the payment</li>
                    <li>Copy the Transaction ID</li>
                    <li>Fill the form with your details and Transaction ID</li>
                  </ol>
                </div>
              </div>
              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-sm text-foreground/90">
                  <strong>Important:</strong> After submitting, your payment will be verified by our team within 24 hours. 
                  You'll receive a confirmation email once verified. Keep your transaction ID safe for reference.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Payment Info Dialog */}
      <Dialog open={showPaymentInfo} onOpenChange={setShowPaymentInfo}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Payment Information - {selectedMethod}</DialogTitle>
            <DialogDescription>
              Follow these steps to complete your payment
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm font-semibold mb-2">Send money to:</p>
              <p className="text-2xl font-bold text-primary font-mono">
                {selectedMethod === "bKash" ? BKASH_NUMBER : NAGAD_NUMBER}
              </p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <p className="text-sm font-semibold mb-2">Amount:</p>
              <p className="text-2xl font-bold text-primary">৳{MEMBERSHIP_FEE}</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-sm">
                After completing the payment through {selectedMethod}, enter your transaction ID in the form above.
              </p>
            </div>
            <Button
              onClick={() => setShowPaymentInfo(false)}
              className="w-full"
            >
              Got it, I'll make the payment
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MembershipFeePage;
