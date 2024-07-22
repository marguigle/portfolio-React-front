const Home = () => {
  return (
    <>
      <div className="bg-[url('https://firebasestorage.googleapis.com/v0/b/portfolio-imagenes.appspot.com/o/pexels-pok-rie-33563-1123483.jpg?alt=media&token=17592b72-5c2d-46d8-8df6-053d282dbdb2')]  container bg-cover bg-center h-screen  from-stone-600 ">
        <h1 className="text-4xl text-center text-white pt-16  font-bold">
          Bienvenido a mi Portfolio
        </h1>
        <div className="flex justify-center items-center mt-20  ">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-imagenes.appspot.com/o/21438e29-719b-45df-ab9b-e61b8e6c3798?alt=media&token=4c5db8b7-7494-4040-88d7-748c1267bb39"
            className="w-52 rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
