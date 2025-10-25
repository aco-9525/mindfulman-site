import Hero from "@/components/Hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I know if I'm actually struggling with mental health?",
    answer: "If your mood, sleep, energy, or motivation have changed and it's been like that for a while, that matters. You don't need to meet some threshold of 'bad enough' to ask for help. If you're asking the question, that's reason enough to talk to someone."
  },
  {
    question: "What if I don't want my parents to know?",
    answer: "You can still talk to a teacher or guidance counselor. You can also text crisis services anonymously (988 or 686868). You don't have to give your name. School staff will respect your privacy unless you're in danger."
  },
  {
    question: "Is it normal for guys to feel emotional or want to cry?",
    answer: "Yes. Feeling things doesn't make you weak. Bottling it forever can actually mess you up worse. Emotions are information about what you need. Ignoring them doesn't make you strong - it just delays dealing with them."
  },
  {
    question: "How do I help a friend who's not okay?",
    answer: "Ask them privately, 'Hey, you good?' Then listen. If you're worried about them hurting themselves, tell an adult even if your friend says 'don't tell.' Keeping someone alive is not snitching. You can say 'I'm worried about [name], they said something that scared me.'"
  },
  {
    question: "What if I'm scared of what people will think?",
    answer: "Most people respect guys who are honest about struggling more than guys who fake being fine. The people who judge you for getting help are not people whose opinion matters. Your mental health is more important than their judgment."
  },
  {
    question: "Will this go on my record or affect my future?",
    answer: "No. Getting mental health support does NOT go on any academic or permanent record. Talking to a counselor is completely separate from your grades or university applications. Your mental health is private."
  },
  {
    question: "What's the difference between feeling sad and depression?",
    answer: "Everyone feels sad sometimes. Depression is when that low mood sticks around for weeks, drains your energy, makes it hard to enjoy anything, and affects sleep or appetite. If you're not sure, ask. A counselor can help you figure it out."
  },
  {
    question: "I don't want to take medication. Do I have to?",
    answer: "No. Therapy, counseling, and talking to someone are all options that don't involve medication. And if medication ever comes up, it's always your choice (or your parents' if you're under 18). But talking is always free, private, and a good first step."
  },
  {
    question: "What if I feel like this is just who I am?",
    answer: "Feeling anxious, depressed, or angry all the time is NOT just your personality. It's a sign something needs attention. You're allowed to feel better. You're not stuck this way."
  },
  {
    question: "Can I just text instead of talking in person?",
    answer: "Yes. Text 988 or 686868 if you're not ready to talk face-to-face. Some school counselors also accept email check-ins. Start where you're comfortable, then go from there."
  }
];

export default function FAQ() {
  return (
    <div>
      <Hero title="Frequently Asked Questions" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="mb-8">
          <p className="text-lg leading-relaxed text-center">
            Real questions. Real answers. No judgment.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full" data-testid="accordion-faq">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left" data-testid={`faq-question-${index}`}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed" data-testid={`faq-answer-${index}`}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
