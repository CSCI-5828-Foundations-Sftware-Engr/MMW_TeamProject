import { useLocation } from 'react-router-dom';


function Submitted({ route, navigation }) {
    const { state } = useLocation();
    var a = JSON.stringify(state)
    return <div>
        <h2>Submitted</h2>
        <p>{a}</p>
    </div>;
}

export default Submitted;