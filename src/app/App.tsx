import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { 
  Clock, 
  Building2, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Target,
  TrendingUp
} from "lucide-react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "./components/ui/accordion";
import { useState } from "react";
import logo from "figma:asset/be37f96b627a371122357e3ccccb67769d2f8ee6.png";

export default function App() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email submitted:", email);
  };

  const companies = [
    "Amazon", "Microsoft", "Meta", "AthenaHealth", "Headspace", "HEB"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <img src={logo} alt="AC4D" className="h-10" />
            <Button variant="outline" size="sm" className="border-[#c4248f] text-[#c4248f] hover:bg-[#c4248f] hover:text-white">
              Talk to an Advisor
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-green-50 opacity-60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#676766]/20 rounded-full text-sm text-[#676766] shadow-sm">
                  <Clock className="size-4" />
                  4-Month Certificate
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#9bcb3c]/10 border border-[#9bcb3c]/30 rounded-full text-sm text-[#676766] shadow-sm">
                  Works alongside your job
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#676766]/20 rounded-full text-sm text-[#676766] shadow-sm">
                  <Building2 className="size-4" />
                  Employer eligible
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1]">
                For mid-level designers who want to{" "}
                <span className="text-[#c4248f]">lead the work</span>
              </h1>
              
              <p className="text-xl text-[#676766] mb-8 leading-relaxed">
                A certificate that gives you the senior-level reps you can't get at work, including facilitation, stakeholder influence, and strategic decision-making on real problems.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-4">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 border-[#676766]/30 focus:border-[#ca2a28] focus:ring-[#ca2a28]"
                  required
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="sm:w-auto w-full bg-[#c4248f] hover:bg-[#c4248f]/90 text-white"
                >
                  Send Me the Curriculum
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </form>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#c4248f]/20 to-[#9bcb3c]/20 rounded-3xl blur-3xl" />
                <div className="relative bg-white/80 backdrop-blur-sm border border-[#676766]/10 rounded-2xl p-8 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#ca2a28]/10 rounded-lg p-3">
                        <Target className="size-6 text-[#ca2a28]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Strategic Reps</h3>
                        <p className="text-sm text-[#676766]">Dozens of facilitation exercises with real stakeholder dynamics</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-[#c4248f]/10 rounded-lg p-3">
                        <Sparkles className="size-6 text-[#c4248f]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Wicked Problems</h3>
                        <p className="text-sm text-[#676766]">Not app redesigns—actual complex social challenges</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-[#9bcb3c]/10 rounded-lg p-3">
                        <TrendingUp className="size-6 text-[#9bcb3c]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Portfolio Ready</h3>
                        <p className="text-sm text-[#676766]">Case studies showing systems thinking, not just screens</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="border-y border-gray-200 bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-[#676766] mb-6 font-semibold">
            AC4D graduates are now at companies like:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {companies.map((company) => (
              <span key={company} className="text-lg font-semibold text-[#676766]/50">
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-8 text-center leading-tight">
            You're doing the work, but you're not getting the opportunities.
          </h2>
          <p className="text-xl text-[#676766] text-center max-w-3xl mx-auto leading-relaxed mb-4">
            When senior roles open, they go to someone else. You've tried YouTube, books, short courses—none of it changed how you're perceived in interviews or promotion conversations.
          </p>
          <p className="text-2xl font-bold text-[#ca2a28] text-center">
            The gap isn't more UX knowledge. It's strategic reps you can't get on your own.
          </p>
        </div>
      </section>

      {/* Solution Bridge */}
      <section className="bg-gradient-to-br from-[#ca2a28] to-[#c4248f] text-white py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-bold mb-8 leading-tight">
            AC4D compresses what typically takes 5+ years of lucky breaks into 4 months of intentional practice
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <p className="text-lg leading-relaxed mb-4 text-white/95">
              You'll join a small cohort of working designers tackling wicked social problems—not app redesigns or tutorial projects. This is real-time collaboration with peers at your level, not self-paced isolation. You'll build the strategic judgment and facilitation skills senior roles require, with case studies you can show employers.
            </p>
            <p className="text-lg font-semibold text-white">
              Built on 12+ years of teaching design at the Masters level.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900">
              Three Career-Changing Outcomes
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#ca2a28] hover:shadow-xl transition-shadow">
              <div className="bg-[#ca2a28]/10 rounded-xl p-4 w-fit mb-6">
                <CheckCircle2 className="size-8 text-[#ca2a28]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Lead strategy work, not just execute it
              </h3>
              <p className="text-[#676766] leading-relaxed text-lg">
                Build multiple wicked-problem case studies that show systems thinking and tradeoffs, not just polished screens
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#c4248f] hover:shadow-xl transition-shadow">
              <div className="bg-[#c4248f]/10 rounded-xl p-4 w-fit mb-6">
                <CheckCircle2 className="size-8 text-[#c4248f]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Walk into senior interviews ready
              </h3>
              <p className="text-[#676766] leading-relaxed text-lg">
                Get dozens of facilitation and stakeholder management reps so leadership conversations feel familiar, not foreign
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#9bcb3c] hover:shadow-xl transition-shadow">
              <div className="bg-[#9bcb3c]/10 rounded-xl p-4 w-fit mb-6">
                <CheckCircle2 className="size-8 text-[#9bcb3c]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Future-proof your career against AI
              </h3>
              <p className="text-[#676766] leading-relaxed text-lg">
                Master the strategic judgment and facilitation skills that AI can't replace—synthesis, stakeholder alignment, and navigating ambiguity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#c4248f]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#9bcb3c]/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <blockquote className="text-center">
            <div className="text-6xl text-[#c4248f] mb-6">"</div>
            <p className="text-2xl sm:text-3xl text-gray-900 mb-8 leading-relaxed font-medium">
              What I value most about my experience at AC4D is that it continues to be the foundation that gives me the confidence and autonomy to adjust year to year as 'what I want to be doing' keeps evolving.
            </p>
            <footer className="text-[#676766] font-semibold text-lg">
              — AC4D Graduate
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-4 border-[#c4248f] rounded-3xl p-8 sm:p-12 shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10">
              Strategic Design Certificate
            </h2>
            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="size-6 text-[#9bcb3c] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900 text-lg">4 courses over 6 months</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="size-6 text-[#9bcb3c] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900 text-lg">10 hours/week</p>
                  <p className="text-[#676766]">2 weekday evenings + 1 weekend session</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="size-6 text-[#9bcb3c] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900 text-lg">12-15 person cohorts</p>
                  <p className="text-[#676766]">with live instruction</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="size-6 text-[#9bcb3c] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900 text-lg">$6,500</p>
                  <p className="text-[#676766]">or $542/month for 12 months</p>
                </div>
              </div>
            </div>
            <div className="bg-[#9bcb3c]/10 rounded-xl p-6 text-center">
              <p className="text-[#676766] font-medium text-lg">
                Many employers cover this through tuition reimbursement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-gray-50 border-2 border-gray-200 rounded-xl px-6 data-[state=open]:border-[#ca2a28]">
              <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline text-lg">
                Can I do this while working full-time?
              </AccordionTrigger>
              <AccordionContent className="text-[#676766] leading-relaxed text-lg">
                Yes. The program is designed for it. 10-12 hours a week is real, but it's structured—not sprawling. Most students find it more sustainable than piecemeal YouTube/books/side-projects because there's a clear container and endpoint.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-gray-50 border-2 border-gray-200 rounded-xl px-6 data-[state=open]:border-[#ca2a28]">
              <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline text-lg">
                Is this like a bootcamp?
              </AccordionTrigger>
              <AccordionContent className="text-[#676766] leading-relaxed text-lg">
                No. Bootcamps are built to get career-changers into entry-level roles through tactical skills. AC4D is built to help practicing designers move from mid-level execution into senior strategic work. The pedagogy, projects, and expectations are different.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-gray-50 border-2 border-gray-200 rounded-xl px-6 data-[state=open]:border-[#ca2a28]">
              <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline text-lg">
                What's the deal with AI in the program?
              </AccordionTrigger>
              <AccordionContent className="text-[#676766] leading-relaxed text-lg">
                AI is embedded into how you work, not taught as a separate module. You'll use it to support synthesis, patterning, and scenario exploration—while you develop the strategic judgment AI can't replace. The goal is to make you more valuable in an AI world.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-gray-50 border-2 border-gray-200 rounded-xl px-6 data-[state=open]:border-[#ca2a28]">
              <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline text-lg">
                Will my employer pay for this?
              </AccordionTrigger>
              <AccordionContent className="text-[#676766] leading-relaxed text-lg">
                Many do. Tuition reimbursement programs typically cover $5,000-5,250/year—meaning your company may pay for most of it. Worth asking HR before you assume it's out of pocket.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ca2a28] via-[#c4248f] to-[#ca2a28]" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-white leading-tight">
            Get the full curriculum free
          </h2>
          <p className="text-xl mb-10 text-white/95 max-w-2xl mx-auto leading-relaxed">
            See exactly what you'll learn, how the cohort works, and whether AC4D fits where you are in your career.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white border-0 h-14 text-lg"
              required
            />
            <Button 
              type="submit" 
              size="lg" 
              className="sm:w-auto w-full bg-[#9bcb3c] hover:bg-[#9bcb3c]/90 text-gray-900 h-14 px-8 font-bold text-lg"
            >
              Send Me the Curriculum
              <ArrowRight className="ml-2 size-5" />
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#676766] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <img src={logo} alt="AC4D" className="h-10 brightness-0 invert" />
            <div className="flex gap-8 text-sm">
              <a href="#" className="hover:text-[#9bcb3c] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#9bcb3c] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#9bcb3c] transition-colors">Contact</a>
            </div>
          </div>
          <div className="text-center sm:text-left mt-8 text-sm text-white/70">
            © 2026 Austin Center for Design. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}