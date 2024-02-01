import { format } from "date-fns";
import Header from "../_components/header";
import { ptBR } from "date-fns/locale";

const Home = () => {
  return ( 
    <div>
      <Header/>
      <div className="px-5 pt-5">
      <h2 className="text-xl font-bold" >Olá, Erick</h2>
      <p className="capitalize text-sm">
        {format(new Date(), "EEEE',' dd 'de' MMMM'", {
          locale: ptBR,
        })}
      </p>
      </div>
    </div>
    
  );
}
 
export default Home;