export default function Card(props) {
    function myClick(){
        props.myClick(props.obj.id);
    }

  return (
    <div className="card col-sm-2 col-md-4 col-lg-3">
      <div className="card-header">{props.obj.name}</div>
      <div className="card-body">
        <img className="img-thumbnail" src={props.obj.image} alt="" style={{height: 300 + 'px'}}/>
      </div>
      <div className="card-footer">
        <p>Született: {props.obj.date}</p>
        <p>Színe: {props.obj.color}</p>
        <button className="btn btn-success" onClick={myClick}>Vigyél haza</button>
      </div>
    </div>
  );
}
