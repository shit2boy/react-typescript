import { access } from "fs";
import { shuffleArray } from "./Utils";

export type Question = {
    category: string;
    correct_answer: string;
    difficulty:string;
    incorrect_answers:string[];
    question:string;
    type:string;
}

export type QuestionState = Question & {answers: string[]};

export enum Difficulty{
    EASY ="easy",
    MEDIUM ="medium",
    HARD ="hard"
}
export const fetchQuizQuestions = async(amount:number,difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
const data = await(await fetch(endpoint)).json();
return data.results.map((question:Question)=>(
    {...question, answers:shuffleArray([...question.incorrect_answers,question.correct_answer])}
))
}
// product Api

export type CartItemType = {
    id: number;
    category: string;
    description:string;
    image:string;
    price:number;
    title:string;
    amount: number;
}

export const getProducts = async():Promise<CartItemType[]> => {
    const endpoint = `https://fakestoreapi.com/products`
const data = await(await fetch(endpoint)).json();
return data
// results.map((question:Question)=>(
//     {...question, answers:shuffleArray([...question.incorrect_answers,question.correct_answer])}
// ))
}
export const getTotalItems = (items:CartItemType[]) => items.reduce((acc:number,item)=>acc + item.amount, 0);
export const handleAddTocart = (clickedItem:CartItemType,callbackFN?:React.Dispatch<React.SetStateAction<CartItemType[]>>) => {
   if (typeof callbackFN !== 'undefined') {
       console.log("sdsd", callbackFN);
       
     callbackFN((prev: any[])=>{
         const isIteminCart = prev.find(item=>item.id ===clickedItem.id)
         if (isIteminCart) {
            return prev.map(item =>(
                item.id === clickedItem.id ? {...item, amount: item.amount + 1} : item
            ))   
        }   
        return [...prev,{...clickedItem,amount: 1}]
     })  
   } 
};

export const removeFromCart  = (id:number,callbackFn?:React.Dispatch<React.SetStateAction<CartItemType[]>>) => {
   if (typeof callbackFn !=="undefined") {
    callbackFn((prev:any[]) =>(
        prev.reduce((acc,item)=>{
if (item.id === id) {
    if(item.amount === 1)return acc;
    return [...acc, {...item, amount: item.amount - 1}];}
    else{
        return [...acc, item];
    }
        },[])
    ))  
   }
};