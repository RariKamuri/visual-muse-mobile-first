
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Circle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Forest Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/lovable-uploads/371d3579-b31f-4f40-bcd5-db88d245442d.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Decorative triangular elements */}
        <div className="absolute top-10 right-10 w-16 h-16 border-4 border-green-400 transform rotate-45 opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-12 h-12 border-3 border-green-300 transform rotate-12 opacity-30"></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 border-2 border-yellow-400 transform -rotate-45 opacity-25"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Logo and Company Name */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mr-4 transform -rotate-12">
              <div className="w-10 h-10 bg-white rounded-sm transform rotate-12"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              PLANCK TECH
            </h1>
          </div>
          
          <h2 className="text-xl md:text-2xl text-green-200 mb-6 font-light">
            Inovação através de Inteligência Artificial
          </h2>
          
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transformamos dados em soluções inteligentes para predição de materiais, 
            alertas climáticos e projetos de inovação tecnológica.
          </p>
          
          <Button 
            size="lg" 
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Conheça nossos projetos <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            O QUE FAZEMOS?
          </h3>
          
          <div className="w-24 h-1 bg-green-500 mx-auto mb-16"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Circle className="w-8 h-8 text-green-400" />
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-3 text-gray-900">
                  Predição de novos materiais
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  <span className="font-semibold text-green-600">usando IA</span>
                </p>
                <p className="text-gray-600 mt-2">
                  Desenvolvemos algoritmos avançados para descobrir e prever propriedades de novos materiais.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Circle className="w-8 h-8 text-yellow-400" />
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-3 text-gray-900">
                  Veículos integrados
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  com <span className="font-semibold text-yellow-600">alertas climáticos automáticos</span>
                </p>
                <p className="text-gray-600 mt-2">
                  Sistemas inteligentes que conectam veículos com dados meteorológicos em tempo real.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Circle className="w-8 h-8 text-blue-400" />
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-3 text-gray-900">
                  Projetos de inovação
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Soluções tecnológicas personalizadas para empresas que buscam transformação digital.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            FUNDADORES
          </h3>
          
          <div className="w-24 h-1 bg-green-500 mx-auto mb-16"></div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="relative mb-6 mx-auto w-48 h-48">
                <div className="absolute inset-0 bg-green-400 rounded-full transform rotate-12 group-hover:rotate-6 transition-transform duration-300"></div>
                <div className="absolute inset-2 bg-white rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <Circle className="w-16 h-16 text-green-500" />
                  </div>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2 text-gray-900">Natan Bueno</h4>
              <p className="text-green-600 font-semibold mb-2">Tech Lead</p>
              <p className="text-sm text-gray-600 mb-1">Mestrando em Ciências dos Materiais</p>
              <p className="text-sm text-gray-600 mb-1">Pós-graduado em Engenharia de Produção</p>
              <p className="text-sm text-gray-600">Cientista da Computação</p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6 mx-auto w-48 h-48">
                <div className="absolute inset-0 bg-green-400 rounded-full transform -rotate-12 group-hover:-rotate-6 transition-transform duration-300"></div>
                <div className="absolute inset-2 bg-white rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                    <Circle className="w-16 h-16 text-purple-500" />
                  </div>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2 text-gray-900">Alice Carasai</h4>
              <p className="text-purple-600 font-semibold mb-2">Especialista em auditoria, compliance e governança</p>
              <p className="text-sm text-gray-600 mb-1">Pós-graduada em Gestão Hospitalar</p>
              <p className="text-sm text-gray-600">Graduada em Administração de Empresas</p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6 mx-auto w-48 h-48">
                <div className="absolute inset-0 bg-green-400 rounded-full transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                <div className="absolute inset-2 bg-white rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                    <Circle className="w-16 h-16 text-yellow-500" />
                  </div>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2 text-gray-900">Rariel Gigante</h4>
              <p className="text-yellow-600 font-semibold mb-2">Engenheiro de Software</p>
              <p className="text-sm text-gray-600 mb-1">Graduando em Análise de Sistemas</p>
              <p className="text-sm text-gray-600">Cientista Contábil</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 px-6 relative overflow-hidden"
        style={{
          backgroundImage: "url('/lovable-uploads/736f73f8-0721-43b1-8926-84b593405d32.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-green-900/80"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Pronto para inovar?
          </h3>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como a Planck Tech pode transformar 
            suas ideias em soluções tecnológicas revolucionárias.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-green-900 hover:bg-green-50 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Entrar em contato <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-3 transform -rotate-12">
              <div className="w-6 h-6 bg-white rounded-sm transform rotate-12"></div>
            </div>
            <span className="text-2xl font-bold">PLANCK TECH</span>
          </div>
          <p className="text-gray-400 mb-4">
            Inovação através de Inteligência Artificial
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 Planck Tech. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
