import ItemCount from "./ItemCount";

const ItemDetail = ({ item}) =>{
    return(
        <>
        <div className="detail-container">
            <article className="card-detail">

            <img className="imagen-detalle" src={item.img} alt="" />
            <div className="detalles">
                <h2 className="subtitulo">{item.title}</h2>
                <h3 className="precios">${item.price}</h3>
                <h4 className="categorias">{item.categoria}</h4>
                <ItemCount  stock={10} initial={1}/>
            </div>
            </article>
        </div>
        </>
    )
}

export default ItemDetail;