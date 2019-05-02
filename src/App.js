import React, { Component } from 'react';
import moment from "moment";
import './App.css';
import 'url-search-params-polyfill';
/*import 'core-js';*/
// import 'core-js/features/promise';
import 'core-js/features/array/includes';
import 'core-js/web/url-search-params';
import 'whatwg-fetch';

const API_URL="https://Comic-Strip-API.426729.repl.co";

function dateFromPath(path){
    return path.replace(/\/[^/]*\/(.*)$/g,"$1");
}

class App extends Component {
  render(){
    return <Newspaper/>;
  }
}

class Newspaper extends Component {
constructor(props){
    super(props);
    let search=new URLSearchParams(window.location.search);
    this.url=search;
    this.state={date:["year","month","day"].reduce((last,next)=>last||!search.get(next),false)?new Date():new Date(search.get("year"),search.get("month")-1,search.get("day")),comics:[]};
  let comics=search.getAll("comic");
  if(comics.length===0) this.state.comics=[{id:"pearlsbeforeswine",name:"Pearls Before Swine"},
{id:"dilbert-classics",name:"Dilbert Classics"},
{id:"lio",name:"Lio"},
{id:"calvinandhobbes",name:"Calvin and Hobbes"},
{id:"foxtrot",name:"Foxtrot"},
{id:"dilbert",name:"Dilbert"},
{id:"garfield",name:"Garfield"},];
  else this.state.comics=comics.map(i=>({id:i}));
  let date=moment(this.state.date).format("YYYY/MM/DD");
  document.title=moment(this.state.date).format("MMMM D[, ]YYYY");
  let newComics=this.state.comics.map(comic=>({...comic,date}));
  this.state.comics=newComics;
  }
  render() {
    return (
      <>
      <div className="navBar">
        <button onClick={()=>this.addDays(-1)} className="changeDate">&lt;</button>
        <h1 className="title">Cartoon Curator</h1>
        <button onClick={()=>this.addDays(1)} className="changeDate next">&gt;</button>
      </div>
      <div className="App">
        {this.state.comics.map((i,index)=><Comic updateVals={newVal=>this.updateValue(index,newVal)} remove={()=>this.popComic(index)} setDate={path=>this.setDate(index,path)} key={i.id} date={i.date} id={i.id} name={i.name}/>)}
        <div className="input-container">
          <input type="button" onClick={()=>this.addComic()} className="plus" value="+"/>
        </div>
      </div>
      </>
    );
  }
  addComic(){
    this.setState({comics:[...this.state.comics,{id:"",name:"",date:moment(this.state.date).format("YYYY/MM/DD")}]});
  }
  updateValue(index,value){
      let comics=[...this.state.comics];
      comics[index]=Object.assign({},comics[index],value);
      this.setURL(comics);
      this.setState({comics});
  }
  setDate(id,path){
    let newComics=[...this.state.comics];
    let newThing={...newComics[id]};
    newThing.date=dateFromPath(path);
    newComics[id]=newThing;
    this.setState({comics:newComics});
  }
  popComic(index){
    let list=[...this.state.comics];
    let ret=list.splice(index,1);
    this.setState({comics:list});
    return ret;
  }
  addDays(numDays){
    let newDate=new Date(this.state.date);
    newDate.setDate(this.state.date.getDate()+numDays);
    // this.state.date=newDate;
    this.applyDate(newDate);
  }
  applyDate(date){
    let mom=moment(date);
    let str=mom.format("YYYY/MM/DD");
    let newComics=this.state.comics.map(comic=>({...comic,date:str}));
    this.setURL(undefined,str);
    // window.history.pushState(date, moment(date).format("MMMM D[,] YYYY"), this.url.toString()/*moment(date).format("[?year=]YYYY[&month=]MM[&day=]DD")*/);
    this.setState({date,comics:newComics});
  }
  setURL(comics,date=this.state.date){
      let mom=moment(date);
    //   alert(this.url);
      if(comics){
          this.url.delete("comic");
          for(let comic of comics){
            this.url.append("comic",comic.id);
          }
      }
      if(date){
        this.url.set("year",mom.format("YYYY"));
        this.url.set("month",mom.format("MM"));
        this.url.set("day",mom.format("DD"));
      }
      window.history.pushState(date,moment(date).format("MMMM D[,] YYYY"), '?'+this.url.toString());
  }
}

class Comic extends Component{
  constructor(props){
    super(props);
    // this.date=this.props.date;
    this.state={date:this.props.date,path:"",strips:{},shown:true,id:this.props.id,name:this.props.name};
    if(this.state.id) {
      this.state.path=this.getPath();
      this.findUrl(this.state.path);
    }
  }
  static getDerivedStateFromProps(newProps,oldState){
      return newProps.date!==oldState.date?{date:newProps.date}:null;
  }
  render(){
    this.findUrl();
    let thisComic=this.state.strips[this.state.path]||{};

    return this.state.path!==""&&this.state.id?
    (
      thisComic.url?<div className="comic-container">
        <h2>{this.state.name}</h2>
        <p>{dateFromPath(this.state.path)}</p>
        <span role="img" aria-label="Delete" onClick={this.props.remove}>❌</span>
        <span className="comic">
        <input type="button" onClick={()=>this.props.setDate(thisComic.previous)} value="←" className="arrow"/>
        <img ref="next" alt="" style={{display:"none"}} src={(this.state.strips[thisComic.previous]||{}).url}/>
        <span>
        <img ref="this" alt={this.state.name||this.state.id+" comic strip"} src={thisComic.url} onClick={()=>this.props.setDate(thisComic.previous)}/>
        </span>
        <img ref="last" alt="" style={{display:"none"}} src={(this.state.strips[thisComic.next]||{}).url}/>
        <input type="button" onClick={()=>this.props.setDate(thisComic.next)} value="→" className="arrow"/>
        </span>
      </div>:null
    ):(
      <div className="input-container">
      <ComicChoice updateValue={(val)=>this.props.updateVals({id:val.id,name:val.name})}/>
      </div>
    );
  }
  async findUrl(path){
    path=path||this.getPath();
    let thisComic, strips={};
    if(!Object.keys(this.state.strips).includes(path)){
      let url=`${API_URL}/api${path}`;
      let json=await fetch(url);
      json=await json.json();
      if(json.error) return console.log(url,"failed");
      thisComic=json;
    }
    else {
      thisComic=this.state.strips[path];
    }
    strips[path]=thisComic;
    if(this.state.path!==path) {
      this.setState({path});
    }
    for(let order of ["previous","next"]){
      if(!this.state.strips[thisComic[order]]&&thisComic[order]&&thisComic[order]!=="") {
        let url=`${API_URL}/api${thisComic[order]}`;
        let json=await fetch(url);
        try{json=await json.json();} catch(err){continue;}
        strips[thisComic[order]]=json;
      }
      else {
        strips[thisComic[order]]=this.state.strips[thisComic[order]];
      }
    }
    let oldKeys=Object.keys(this.state.strips);
    if(Object.keys(strips).filter(i=>!oldKeys.includes(i)).length>0){
        this.setState({strips});
    }
  }
  getPath(date=this.state.date){
    return `/${this.state.id}/${date}`;
  }
}

class ComicChoice extends Component{
  constructor(props) {
    super(props);
    this.state={strips:{"Select":""}};
    this.findStrips();
  }
  render(){
    return <select className="comic-choice" onChange={event=>this.props.updateValue({name:event.target.value,id:this.state.strips[event.target.value]})}>
    {Object.keys(this.state.strips).sort((last,next)=>next>last).map(i=><option key={i} value={i}>{i}</option>)}
    </select>;
  }
  async findStrips(){
    let strips=await fetch(`${API_URL}/ids`);
    strips=await strips.json();
    let newStrips={"Select":""};
    for(let key of Object.keys(strips)){
      newStrips={...newStrips,...strips[key]};
    }
    this.setState({strips:newStrips});
  }
}

console.log("ran");

export default App;
