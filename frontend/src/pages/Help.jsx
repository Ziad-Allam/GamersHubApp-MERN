import React from 'react'
import Title from '../components/ui/Title'

const faqs = [
    {
        question: "How can I track my order?",
        answer:
            "You can track your order by going to the 'Orders' section in your account dashboard. Each order will display its current status and shipping information.",
    },
    {
        question: "What is your return policy?",
        answer:
            "We accept returns within 14 days of delivery for most products, including gaming hardware and accessories, as long as they're in original condition and packaging.",
    },
    {
        question: "Can I cancel my order after placing it?",
        answer:
            "Orders can be canceled within the first hour after placement. After that, cancellations depend on the shipment status. Please contact our support team for assistance.",
    },
    {
        question: "Do you offer warranty on PC components?",
        answer:
            "Yes, all hardware components such as GPUs, RAMs, CPUs, and SSDs come with a manufacturer warranty. Details are listed on each product page.",
    },
    {
        question: "How do I contact customer support?",
        answer:
            "You can reach our support team through the 'Help' section or email us at support@gamershub.com. Live chat is available from 10 AM to 8 PM.",
    },
    {
        question: "Can I upgrade or change my order after checkout?",
        answer:
            "If your order hasn’t shipped yet, you can modify it by contacting customer support. Once shipped, changes are no longer possible.",
    },
    {
        question: "What should I do if I receive a damaged item?",
        answer:
            "Please report any damages within 24 hours of delivery with photos. We'll arrange a replacement or refund based on the issue.",
    },
    {
        question: "Can I redeem gift cards or promo codes?",
        answer:
            "Absolutely! Apply your gift card or promo code during checkout in the 'Promo Code' section. Only one code can be used per order.",
    },
];

function Help() {
    return (
        <>
            <Title>Help Center</Title>

            <p className="text-gray-600 mb-6">
                Need help? Check out our frequently asked questions below.
            </p>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-md p-4 bg-white">
                        <h3 className="text-lg font-medium text-gray-800 mb-2">{faq.question}</h3>
                        <p className="text-gray-600">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Help
