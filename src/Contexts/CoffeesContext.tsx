import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

interface CoffeesProviderProps {
  children: ReactNode;

}


interface Coffee {
  id: string;          // id é uma string
  tags: string[];      // tags é um array de strings
  title: string;       // título é uma string
  subtitle: string;    // subtítulo é uma string
  price: number;       // preço é um número
  amount: number;      // quantidade é um número
  image: string;
}
export type CoffeeType = Coffee[];

interface CoffeeContextType {
  coffees: CoffeeType;
  incrementAmount: (id: string) => void;
  decrementAmount: (id: string) => void;
  removeItemFromCart: (id: string) => void;
  totalAmount: number;

}

export const CoffeesContext = createContext({} as CoffeeContextType);

export function CoffeesProvider({ children }: CoffeesProviderProps) {

  const initialCoffees = [
    {
      id: uuidv4(),
      tags: ['tradicional'],
      title: 'Expresso Tradicional',
      subtitle: 'O tradicional café com água quente e grãos moídos',
      price: 9.90,
      amount: 0,
      image: 'Coffee1.png'
    },
    {
      id: uuidv4(),
      tags: ['tradicional'],
      title: 'Expresso Americano',
      subtitle: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.90,
      amount: 0,
      image: 'Coffee2.png'
    },
    {
      id: uuidv4(),
      tags: ['tradicional'],
      title: 'Expresso Cremoso',
      subtitle: 'Café expresso tradicionalcom espuma cremosa',
      price: 9.90,
      amount: 0,
      image: 'Coffee3.png'
    },
    {
      id: uuidv4(),
      tags: ['tradicional', 'gelado'],
      title: 'Expresso Gelado',
      subtitle: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.90,
      amount: 0,
      image: 'Coffee4.png'
    },
    {
      id: uuidv4(),
      tags: ['tradicional', 'com leite'],
      title: 'Café com Leite',
      subtitle: 'Meio a meio expresso tradicional com leite vaporizado',
      price: 9.90,
      amount: 0,
      image: 'Coffee5.png'
    },
    {
      id: uuidv4(),
      tags: ['tradicional', 'com leite'],
      title: 'Latte',
      subtitle: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.90,
      amount: 0,
      image: 'Coffee6.png'
    },
    {
      id: uuidv4(),
      tags: ['tradicional', 'com leite'],
      title: 'Capuccino',
      subtitle: 'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.90,
      amount: 0,
      image: 'Coffee7.png'
    },
    {
      id: uuidv4(),
      tags: ['tradicional', 'com leite'],
      title: 'Macchiato',
      subtitle: 'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.90,
      amount: 0,
      image: 'Coffee8.png'
    },
    {
      id: uuidv4(),
      tags: ['tradicional', 'com leite'],
      title: 'Mocaccino',
      subtitle: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.90,
      amount: 0,
      image: 'Coffee9.png'
    },
    {
      id: uuidv4(),
      tags: ['especial', 'com leite'],
      title: 'Chocolate quente',
      subtitle: 'Bebida feita com chocolate dissolvido n leite quente e café',
      price: 9.90,
      amount: 0,
      image: 'Coffee10.png'
    },
    {
      id: uuidv4(),
      tags: ['especial', 'alcoólico', 'gelado'],
      title: 'cubano',
      subtitle: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9.90,
      amount: 0,
      image: 'Coffee11.png'
    },
    {
      id: uuidv4(),
      tags: ['especial'],
      title: 'Havaiano',
      subtitle: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.90,
      amount: 0,
      image: 'Coffee12.png'
    },
    {
      id: uuidv4(),
      tags: ['especial'],
      title: 'Árabe',
      subtitle: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 9.90,
      amount: 0,
      image: 'Coffee13.png'
    },
    {
      id: uuidv4(),
      tags: ['especial', 'alcoólico'],
      title: 'Irlandês',
      subtitle: 'Bebida a base de café, quísque irlandês, açúcar e chantilly',
      price: 9.90,
      amount: 0,
      image: 'Coffee14.png'
    }
  ];
  const [coffees, setCoffees] = useState<CoffeeType>(initialCoffees);
  const [totalAmount, setTotalAmount] = useState<number>(0);


  useEffect(() => {
    setTotalAmount(() => {
      const count = coffees.reduce((accumulator, coffee) => {
        return accumulator + coffee.amount;
      }, 0);
      return count;
    });

  })

  const incrementAmount = (id: string) => {
    setCoffees((prevState: CoffeeType) => {
      return prevState.map(coffee => (
        coffee.id === id ? { ...coffee, amount: coffee.amount + 1 } : coffee
      ));
    });
  }

  const decrementAmount = (id: string) => {
    setCoffees((prevState: CoffeeType) => {
      return prevState.map(coffee => (
        coffee.id === id ? { ...coffee, amount: coffee.amount - 1 } : coffee
      ));
    });

  }

  const removeItemFromCart = (id: string) => {
    setCoffees((prevState): CoffeeType => {
      return prevState.map(coffee => (coffee.id == id ? { ...coffee, amount: 0 } : coffee))
    })
  }




  const value = useMemo(() => ({
    coffees,
    incrementAmount,
    decrementAmount,
    removeItemFromCart,
    totalAmount,
  }), [coffees, totalAmount, removeItemFromCart]);

  return (

    <CoffeesContext.Provider value={value}>
      {children}
    </CoffeesContext.Provider>
  )
}

