import Signin from "../../components/Signin/Signin"
import Signin_M from "../../components/Signin/Signin_M"



const signin = () => {
	return(
		<>
			<div className="lg:block hidden">
				<Signin />
			</div>
			<div className="lg:hidden block">
				<Signin_M />
			</div>
			
		</>
	)
}

export default signin