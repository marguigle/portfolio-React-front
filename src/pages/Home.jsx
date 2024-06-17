import { Lumiflex } from "uvcanvas";

const Home = () => {
  return (
    <>
      <Lumiflex />
      <div className="bg-[url('https://firebasestorage.googleapis.com/v0/b/portfolio-imagenes.appspot.com/o/pexels-steve-1537334.jpg?alt=media&token=31065b30-1439-4f4c-b5ff-f3b1411d40c3')] bg-cover bg-center h-screen  from-stone-600 ">
        <h1 className="text-4xl text-center text-white pt-16  font-bold">
          Bienvenido a mi Portfolio
        </h1>
        <div className="flex justify-center items-center mt-20  ">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-imagenes.appspot.com/o/IMG_20200201_203709542.jpg?alt=media&token=45d699f0-5036-473c-b54e-2bc8ea985d43"
            alt="mi foto"
            className="max-w-60 align-middle justify-center rounded-3xl"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
// className="bg-[url('https://firebasestorage.googleapis.com/v0/b/portfolio-imagenes.appspot.com/o/pexels-steve-1537334.jpg?alt=media&token=31065b30-1439-4f4c-b5ff-f3b1411d40c3')] bg-cover bg-center h-screen  from-stone-600 "
