const container=document.getElementById("root");
console.log(container);
const root=ReactDOM.createRoot(container);
const h21=<h2>Hello World</h2>;
const h22=<h2>ABES Engineering College</h2>;
const div=<div>{h21},{h22}</div>
const wrapper=<div style={{border:'2px solid red'}}>
    {div}
    <h2>Hey </h2>
</div>
root.render(wrapper)