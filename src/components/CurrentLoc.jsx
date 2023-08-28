



export default function Currentloc(){
return(
    <div className="flex flex-row items-center bg-purple-600 p-2 rounded-full text-white hover:bg-purple-400 transition-colors">
        <img className=' h-5 m-2' src="src/assets/icons-location.png" alt="clog" />
        <h1 className="pl-1 hidden md:flex">Current Location</h1>
    </div>
)

}