import { useState } from 'react';

const MembershipPaymentForm = () => {
  const MEMBERSHIP_FEE = 500;
  const BKASH_NUMBER = "01712345678";
  const NAGAD_NUMBER = "01712345678";
  const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE";

  const [formData, setFormData] = useState({
    name: "",
    department: "",
    batch: "",
    memberType: "",
    month: "",
    year: "",
    paymentMethod: "",
    transactionId: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("");

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

  const memberTypes = [
    "President",
    "Vice-President",
    "General Secretary",
    "Asst. General Secretary",
    "Treasurer",
    "Office Secretary",
    "Organizing Secretary",
    "Media Secretary",
    "Executive Member",
    "General Member"
  ];

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => currentYear - 1 + i);

  const handlePaymentMethodSelect = (method) => {
    setSelectedMethod(method);
    setFormData({ ...formData, paymentMethod: method });
    setShowPaymentInfo(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.department || !formData.batch || !formData.memberType || 
        !formData.month || !formData.year || !formData.paymentMethod || !formData.transactionId) {
      alert("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const paymentData = {
        ...formData,
        amount: MEMBERSHIP_FEE
      };

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData)
      });

      alert(`Payment information submitted for ${formData.month} ${formData.year}! We'll verify and confirm shortly.`);
      
      setFormData({
        name: "",
        department: "",
        batch: "",
        memberType: "",
        month: "",
        year: "",
        paymentMethod: "",
        transactionId: ""
      });
      setShowPaymentInfo(false);
      setSelectedMethod("");

    } catch (error) {
      console.error('Error submitting payment:', error);
      alert("Failed to submit payment information. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-orange-500 mb-4">
            Membership Fee Payment
          </h1>
          <p className="text-xl text-gray-300">
            Pay your monthly membership fee - ৳{MEMBERSHIP_FEE}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Benefits Card */}
          <div className="bg-gray-800 rounded-lg p-8 border-2 border-orange-500/20">
            <div className="text-center mb-6">
              <div className="text-6xl font-bold text-orange-500 mb-4">
                ৳{MEMBERSHIP_FEE}
              </div>
              <h2 className="text-2xl font-semibold mb-2">Monthly Benefits</h2>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span>Access to all workshops and training</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span>Use of team equipment and workspace</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span>Participation in competitions</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span>Mentorship from senior members</span>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Payment Information</h2>
            <div className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder="Enter your full name"
                  disabled={isSubmitting}
                />
              </div>

              {/* Department */}
              <div>
                <label className="block text-sm font-medium mb-2">Department *</label>
                <select
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500"
                  disabled={isSubmitting}
                >
                  <option value="">Select department</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              {/* Batch */}
              <div>
                <label className="block text-sm font-medium mb-2">Batch Number *</label>
                <input
                  type="text"
                  value={formData.batch}
                  onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder="e.g., 2023"
                  disabled={isSubmitting}
                />
              </div>

              {/* Member Type */}
              <div>
                <label className="block text-sm font-medium mb-2">Member Type *</label>
                <select
                  value={formData.memberType}
                  onChange={(e) => setFormData({ ...formData, memberType: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500"
                  disabled={isSubmitting}
                >
                  <option value="">Select member type</option>
                  {memberTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Payment Period */}
              <div>
                <label className="block text-sm font-medium mb-2">Payment Period *</label>
                <p className="text-sm text-gray-400 mb-2">Select the month and year you're paying for</p>
                <div className="grid grid-cols-2 gap-4">
                  <select
                    value={formData.month}
                    onChange={(e) => setFormData({ ...formData, month: e.target.value })}
                    className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500"
                    disabled={isSubmitting}
                  >
                    <option value="">Month</option>
                    {months.map((month) => (
                      <option key={month} value={month}>{month}</option>
                    ))}
                  </select>
                  <select
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500"
                    disabled={isSubmitting}
                  >
                    <option value="">Year</option>
                    {years.map((year) => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
                {formData.month && formData.year && (
                  <div className="mt-2 p-3 bg-orange-500/10 border border-orange-500/30 rounded-lg text-center">
                    <span className="font-semibold">Paying for:</span> {formData.month} {formData.year}
                  </div>
                )}
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-sm font-medium mb-2">Payment Method *</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => handlePaymentMethodSelect("bKash")}
                    className={`h-20 rounded-lg font-semibold text-lg transition-all ${
                      formData.paymentMethod === "bKash"
                        ? "bg-orange-500 text-white"
                        : "bg-gray-700 hover:bg-gray-600 border border-gray-600"
                    }`}
                    disabled={isSubmitting}
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-2xl mb-1">📱</span>
                      <span>bKash</span>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePaymentMethodSelect("Nagad")}
                    className={`h-20 rounded-lg font-semibold text-lg transition-all ${
                      formData.paymentMethod === "Nagad"
                        ? "bg-orange-500 text-white"
                        : "bg-gray-700 hover:bg-gray-600 border border-gray-600"
                    }`}
                    disabled={isSubmitting}
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-2xl mb-1">💳</span>
                      <span>Nagad</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Transaction ID */}
              {formData.paymentMethod && (
                <div className="animate-in fade-in">
                  <label className="block text-sm font-medium mb-2">Transaction ID *</label>
                  <input
                    type="text"
                    value={formData.transactionId}
                    onChange={(e) => setFormData({ ...formData, transactionId: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500"
                    placeholder="Enter transaction ID"
                    disabled={isSubmitting}
                  />
                  <p className="text-sm text-gray-400 mt-1">
                    Enter the transaction ID from your {formData.paymentMethod} payment
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting || !formData.month || !formData.year}
                className="w-full py-3 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-lg font-bold text-lg transition-colors"
              >
                {isSubmitting ? "Submitting..." : "Submit Payment Information"}
              </button>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-12 bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <span className="text-orange-500">ℹ️</span>
            Payment Instructions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-orange-500 mb-4">For bKash:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                <li>Open your bKash app</li>
                <li>Select "Send Money"</li>
                <li>Enter number: <span className="font-mono font-semibold text-white">{BKASH_NUMBER}</span></li>
                <li>Enter amount: <span className="font-semibold text-white">৳{MEMBERSHIP_FEE}</span></li>
                <li>Add reference: Your name</li>
                <li>Complete the payment</li>
                <li>Copy the Transaction ID</li>
                <li>Fill the form above with your details</li>
              </ol>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange-500 mb-4">For Nagad:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                <li>Open your Nagad app</li>
                <li>Select "Send Money"</li>
                <li>Enter number: <span className="font-mono font-semibold text-white">{NAGAD_NUMBER}</span></li>
                <li>Enter amount: <span className="font-semibold text-white">৳{MEMBERSHIP_FEE}</span></li>
                <li>Add reference: Your name</li>
                <li>Complete the payment</li>
                <li>Copy the Transaction ID</li>
                <li>Fill the form above with your details</li>
              </ol>
            </div>
          </div>
          <div className="mt-6 p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg">
            <p className="text-sm">
              <strong>Important:</strong> After submitting, your payment will be verified within 24 hours. 
              Your payment will be recorded in a sheet named "{formData.month && formData.year ? `${formData.month}-${formData.year}` : 'Month-Year'}". 
              The sheet will be created automatically if it doesn't exist yet.
            </p>
          </div>
        </div>

        {/* Payment Info Modal */}
        {showPaymentInfo && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full">
              <h3 className="text-2xl font-semibold mb-4">Payment Information - {selectedMethod}</h3>
              <p className="text-gray-300 mb-6">Follow these steps to complete your payment</p>
              
              <div className="space-y-4">
                <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                  <p className="text-sm font-semibold mb-2">Send money to:</p>
                  <p className="text-2xl font-bold text-orange-500 font-mono">
                    {selectedMethod === "bKash" ? BKASH_NUMBER : NAGAD_NUMBER}
                  </p>
                </div>
                
                <div className="p-4 bg-gray-700 rounded-lg">
                  <p className="text-sm font-semibold mb-2">Amount:</p>
                  <p className="text-2xl font-bold text-orange-500">৳{MEMBERSHIP_FEE}</p>
                </div>
                
                <div className="p-4 bg-gray-700/50 rounded-lg">
                  <p className="text-sm text-gray-300">
                    After completing the payment through {selectedMethod}, enter your transaction ID in the form.
                  </p>
                </div>
                
                <button
                  onClick={() => setShowPaymentInfo(false)}
                  className="w-full py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-colors"
                >
                  Got it, I'll make the payment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MembershipPaymentForm;
