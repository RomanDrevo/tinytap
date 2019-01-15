import ApiGateway from "./api/ApiGateway";
import ReposStore from './stores/ReposStore'

const bootstrapper = () =>{
    const apiGateway = new ApiGateway('https://api.github.com/');
    const reposStore = new ReposStore(apiGateway)

    return {
        reposStore
    }
}

export default bootstrapper