import { format } from "date-fns";
import Header from "../_components/header";
import { ptBR } from "date-fns/locale";
import Search from "./_components/search";
import BookingItem from "../_components/booking-item";

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
      <div className="px-5 mt-6">
        <Search/>
      </div>
      <div className="px-5 mt-6">
        <h2 className="text-xs uppercase text-gray-400 font-bold mb-3">agendamentos</h2>
        <BookingItem/>
      </div>
    </div>
    
  );
}
 
export default Home;