import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="bg-[#1e2a38] text-white p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
      <h2 className="text-4xl font-bold mb-4">Ceginnerins Topmolricy</h2>
      <p className="text-lg max-w-2xl mb-6">
        Company tribute stones balky el licenta. Porta porta conubia te the
        stingres substia consectetuer.
      </p>
      <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md">
        Explore More
      </Button>
    </section>
  );
}
