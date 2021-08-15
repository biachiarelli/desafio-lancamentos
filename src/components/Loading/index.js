
import loading from "../../assets/img/loading.gif";

const Loading = () => {
    return (
        <div className="Loading">
            <img  className="Loading-image" src={loading} alt="Carregando" />
        </div>
    )
}

export default Loading;