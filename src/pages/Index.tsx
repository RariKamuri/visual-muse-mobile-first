import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const CustomIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 139.65 179.33"
      className="w-8 h-8"
      aria-hidden="true"
    >
      <path className="fill-current" d="M67.15,179.33c-7.87,0-15.05-4.11-19.05-11.03L2.93,90.1c-6-10.39-2.5-23.85,7.81-29.99h0S106.34,3.16,106.34,3.16c8.13-4.85,18.08-4.06,25.35,2,7.27,6.07,9.84,15.71,6.54,24.58l-50.33,135.22c-3.01,8.09-10.22,13.57-18.82,14.29-.64.06-1.28.08-1.91.08ZM18.04,72.34c-3.65,2.18-4.89,6.95-2.77,10.63l45.17,78.2c1.56,2.69,4.4,4.06,7.43,3.88,3.1-.26,5.59-2.16,6.67-5.06L124.87,24.78c1.78-4.78-1.32-7.85-2.31-8.67-.99-.82-4.56-3.32-8.94-.7L18.04,72.34Z"/>
    </svg>
  );

  const AvatarShape = ({ className }: { className?: string }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 139.65 179.33"
      className={className}
      aria-hidden="true"
    >
      <path className="fill-current" d="M67.15,179.33c-7.87,0-15.05-4.11-19.05-11.03L2.93,90.1c-6-10.39-2.5-23.85,7.81-29.99h0S106.34,3.16,106.34,3.16c8.13-4.85,18.08-4.06,25.35,2,7.27,6.07,9.84,15.71,6.54,24.58l-50.33,135.22c-3.01,8.09-10.22,13.57-18.82,14.29-.64.06-1.28.08-1.91.08ZM18.04,72.34c-3.65,2.18-4.89,6.95-2.77,10.63l45.17,78.2c1.56,2.69,4.4,4.06,7.43,3.88,3.1-.26,5.59-2.16,6.67-5.06L124.87,24.78c1.78-4.78-1.32-7.85-2.31-8.67-.99-.82-4.56-3.32-8.94-.7L18.04,72.34Z"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-white font-kade">
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
          {/* Logo SVG */}
          <div className="flex items-center justify-center mb-8">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 3599.19 631.49"
              className="w-full max-w-lg h-auto"
              fill="white"
            >
              <path d="M920.72,204.28h108.72c22.56,0,44,1.48,60.64,18.12,16.64,16.64,21.08,33.65,21.08,52.88v2.96c0,18.86-4.44,36.24-21.08,52.88-16.64,16.64-38.09,17.75-60.64,17.75h-76.17v116.48h-32.54V204.28ZM953.26,322.61h87.27c14.05,0,25.15-2.96,33.28-12.2,4.44-5.18,4.44-8.14,4.44-19.23v-29.58c0-11.09,0-14.05-4.44-19.23-8.13-9.24-19.23-12.2-33.28-12.2h-87.27v92.45Z"/>
              <path fill="#22c55e" d="M312.34,307.12l-75.74-203.48c-6.05-16.24,11.71-31.05,26.6-22.18l137.57,81.96"/>
              <path fill="#22c55e" d="M667.44,307.12l75.74-203.48c6.05-16.24-11.71-31.05-26.6-22.18l-133.53,79.55"/>
              <path d="M717.35,361.34l-99.74-206.98c-2.91-6.72-9.53-11.07-16.85-11.07h-222.32c-7.01,0-13.4,3.99-16.49,10.28l-101.45,207.05c-3.82,7.8-1.65,17.21,5.2,22.56l212.38,165.63c6.78,5.29,16.33,5.16,22.97-.31l211.14-165.7c6.31-5.2,8.42-13.95,5.17-21.46Z"/>
              <path d="M1154.42,204.28h32.54v234.44h138.67v26.62h-171.21V204.28Z"/>
              <path d="M1525.68,465.34l-17.01-64.71h-122.03l-17.38,64.71h-32.54l70.63-261.07h81.35l70.63,261.07h-33.65ZM1501.27,374.38l-38.09-144.21h-31.43l-38.09,144.21h107.61Z"/>
              <path d="M1597.41,204.28h38.09l119.44,210.78v-210.78h32.91v261.07h-38.09l-119.81-210.04v210.04h-32.54V204.28Z"/>
              <path d="M1842.21,369.94v-69.52c0-57.32,47.33-103.17,105.76-103.17,38.09,0,73.96,19.6,92.45,52.51l-15.53,14.05c-52.14-32.91-58.43-40.31-76.92-40.31-26.99,0-51.4,13.31-66.19,36.24-5.92,8.88-5.92,17.75-5.92,28.47v92.82c0,11.09,0,19.97,5.92,28.84,14.79,22.93,39.2,36.24,66.19,36.24,18.49,0,24.78-7.4,76.92-40.68l15.53,14.05c-18.49,32.91-54.36,52.88-92.45,52.88-58.42,0-105.76-46.96-105.76-102.43Z"/>
              <path d="M2084.05,204.28h32.54v115h35.13l94.66-115h38.83l-106.5,127.57,106.5,133.49h-39.94l-94.29-120.18h-34.39v120.18h-32.54V204.28Z"/>
              <path d="M2538.14,230.9v234.44h-32.17v-234.44h-87.64v-26.62h206.71v26.62h-86.9Z"/>
              <path d="M2660.17,465.34V204.28h176.75v26.62h-144.21v88.01h122.4v26.62h-122.4v93.55h144.21v26.25h-176.75Z"/>
              <path d="M2872.42,369.94v-69.52c0-57.32,47.33-103.17,105.76-103.17,38.09,0,73.96,19.6,92.45,52.51l-15.53,14.05c-52.14-32.91-58.43-40.31-76.92-40.31-26.99,0-51.4,13.31-66.19,36.24-5.92,8.88-5.92,17.75-5.92,28.47v92.82c0,11.09,0,19.97,5.92,28.84,14.79,22.93,39.2,36.24,66.19,36.24,18.49,0,24.78-7.4,76.92-40.68l15.53,14.05c-18.49,32.91-54.36,52.88-92.45,52.88-58.42,0-105.76-46.96-105.76-102.43Z"/>
              <path d="M3114.26,204.28h32.54v114.63h124.99v-114.63h32.91v261.07h-32.91v-119.81h-124.99v119.81h-32.54V204.28Z"/>
            </svg>
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
                  <CustomIcon />
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
                  <CustomIcon />
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
                  <CustomIcon />
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
              <div className="relative mb-6 mx-auto w-48 h-56">
                <AvatarShape className="w-full h-full text-green-400 transform group-hover:scale-105 transition-transform duration-300" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-gray-900">Natan Bueno</h4>
              <p className="text-green-600 font-semibold mb-2">Tech Lead</p>
              <p className="text-sm text-gray-600 mb-1">Mestrando em Ciências dos Materiais</p>
              <p className="text-sm text-gray-600 mb-1">Pós-graduado em Engenharia de Produção</p>
              <p className="text-sm text-gray-600">Cientista da Computação</p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6 mx-auto w-48 h-56">
                <AvatarShape className="w-full h-full text-purple-400 transform group-hover:scale-105 transition-transform duration-300" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-gray-900">Alice Carasai</h4>
              <p className="text-purple-600 font-semibold mb-2">Especialista em auditoria, compliance e governança</p>
              <p className="text-sm text-gray-600 mb-1">Pós-graduada em Gestão Hospitalar</p>
              <p className="text-sm text-gray-600">Graduada em Administração de Empresas</p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6 mx-auto w-48 h-56">
                <AvatarShape className="w-full h-full text-yellow-400 transform group-hover:scale-105 transition-transform duration-300" />
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

      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 3599.19 631.49"
              className="w-48 h-auto"
              fill="white"
            >
              <path d="M920.72,204.28h108.72c22.56,0,44,1.48,60.64,18.12,16.64,16.64,21.08,33.65,21.08,52.88v2.96c0,18.86-4.44,36.24-21.08,52.88-16.64,16.64-38.09,17.75-60.64,17.75h-76.17v116.48h-32.54V204.28ZM953.26,322.61h87.27c14.05,0,25.15-2.96,33.28-12.2,4.44-5.18,4.44-8.14,4.44-19.23v-29.58c0-11.09,0-14.05-4.44-19.23-8.13-9.24-19.23-12.2-33.28-12.2h-87.27v92.45Z"/>
              <path fill="#22c55e" d="M312.34,307.12l-75.74-203.48c-6.05-16.24,11.71-31.05,26.6-22.18l137.57,81.96"/>
              <path fill="#22c55e" d="M667.44,307.12l75.74-203.48c6.05-16.24-11.71-31.05-26.6-22.18l-133.53,79.55"/>
              <path d="M717.35,361.34l-99.74-206.98c-2.91-6.72-9.53-11.07-16.85-11.07h-222.32c-7.01,0-13.4,3.99-16.49,10.28l-101.45,207.05c-3.82,7.8-1.65,17.21,5.2,22.56l212.38,165.63c6.78,5.29,16.33,5.16,22.97-.31l211.14-165.7c6.31-5.2,8.42-13.95,5.17-21.46Z"/>
              <path d="M1154.42,204.28h32.54v234.44h138.67v26.62h-171.21V204.28Z"/>
              <path d="M1525.68,465.34l-17.01-64.71h-122.03l-17.38,64.71h-32.54l70.63-261.07h81.35l70.63,261.07h-33.65ZM1501.27,374.38l-38.09-144.21h-31.43l-38.09,144.21h107.61Z"/>
              <path d="M1597.41,204.28h38.09l119.44,210.78v-210.78h32.91v261.07h-38.09l-119.81-210.04v210.04h-32.54V204.28Z"/>
              <path d="M1842.21,369.94v-69.52c0-57.32,47.33-103.17,105.76-103.17,38.09,0,73.96,19.6,92.45,52.51l-15.53,14.05c-52.14-32.91-58.43-40.31-76.92-40.31-26.99,0-51.4,13.31-66.19,36.24-5.92,8.88-5.92,17.75-5.92,28.47v92.82c0,11.09,0,19.97,5.92,28.84,14.79,22.93,39.2,36.24,66.19,36.24,18.49,0,24.78-7.4,76.92-40.68l15.53,14.05c-18.49,32.91-54.36,52.88-92.45,52.88-58.42,0-105.76-46.96-105.76-102.43Z"/>
              <path d="M2084.05,204.28h32.54v115h35.13l94.66-115h38.83l-106.5,127.57,106.5,133.49h-39.94l-94.29-120.18h-34.39v120.18h-32.54V204.28Z"/>
              <path d="M2538.14,230.9v234.44h-32.17v-234.44h-87.64v-26.62h206.71v26.62h-86.9Z"/>
              <path d="M2660.17,465.34V204.28h176.75v26.62h-144.21v88.01h122.4v26.62h-122.4v93.55h144.21v26.25h-176.75Z"/>
              <path d="M2872.42,369.94v-69.52c0-57.32,47.33-103.17,105.76-103.17,38.09,0,73.96,19.6,92.45,52.51l-15.53,14.05c-52.14-32.91-58.43-40.31-76.92-40.31-26.99,0-51.4,13.31-66.19,36.24-5.92,8.88-5.92,17.75-5.92,28.47v92.82c0,11.09,0,19.97,5.92,28.84,14.79,22.93,39.2,36.24,66.19,36.24,18.49,0,24.78-7.4,76.92-40.68l15.53,14.05c-18.49,32.91-54.36,52.88-92.45,52.88-58.42,0-105.76-46.96-105.76-102.43Z"/>
              <path d="M3114.26,204.28h32.54v114.63h124.99v-114.63h32.91v261.07h-32.91v-119.81h-124.99v119.81h-32.54V204.28Z"/>
            </svg>
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
