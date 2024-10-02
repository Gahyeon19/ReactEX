import { useSearchParams } from "react-router-dom";

const ParamEx2 = () => {
 console.log(useSearchParams());    //{"id": 1}
  
  let [params] = useSearchParams(); //["id":1, "use-image": true]
  let id = console.log(params.get("id"));
  let use_image = console.log(params.get("use-iamge"));
  let use_case = params.get("use-case");

  if (!use_case){ 
    use_case = false;
  }
  
  return (
    <>
      <h2>ParamEx2.jsx</h2>
      <div>
        {id} : {use_image} : {use_case}
      </div>
    </>
  )
}

export default ParamEx2;