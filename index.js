const container=document.getElementById("root");
console.log(container);
const root=ReactDOM.createRoot(container);
const h2=React.createElement('h2',{ style: { color: 'red', backgroundColor: 'blue' } });
root.render(h2);
const img=React.createElement('img',{src:'https://www.google.com/imgres?q=abes%20engineering%20college&imgurl=https%3A%2F%2Fwww.abes.ac.in%2Fassets%2F2.jpg&imgrefurl=https%3A%2F%2Fwww.abes.ac.in%2Fcetl-about.html&docid=3fZ49Ft0OwvEfM&tbnid=Okqc6A_fvbkVxM&vet=12ahUKEwiAiNWIit6WAxV5SGwGHehQOF4QnPAOegQIOxAA..i&w=1496&h=800&hcb=2&ved=2ahUKEwiAiNWIit6WAxV5SGwGHehQOF4QnPAOegQIOxAA',style:{height:'200px',width:'200px'}})
const h1=React.createElement("h1",{style:{color:"brown"}},"ABES Engineering College")
const div=React.createElement('div',{style:{border:'2px solid red'}},h1,h2,img)
root.render(div)