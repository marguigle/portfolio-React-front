const Home = () => {
  return (
    <>
      <div className="bg-[url('https://firebasestorage.googleapis.com/v0/b/portfolio-imagenes.appspot.com/o/pexels-scottwebb-1048049.jpg?alt=media&token=66153cef-4593-4d96-bc52-adde07951f37')] bg-cover bg-center h-screen  from-stone-600 ">
        <h1 className="text-4xl text-center text-white pt-16  font-bold">
          Bienvenido a mi Portfolio
        </h1>
        <div className="flex justify-center items-center mt-20  ">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-imagenes.appspot.com/o/mi%20foto%203.jpg?alt=media&token=4e65d21a-0602-45f1-9c3d-99324bb847db"
            className="w-52 rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
