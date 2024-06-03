const Home = () => {
  return (
    <div className="bg-[url('https://firebasestorage.googleapis.com/v0/b/portfolio-imagenes.appspot.com/o/trees-450854_1920.jpg?alt=media&token=ecac8fcd-2ddd-4186-97e3-f6fef009874a')] bg-cover bg-center h-screen  from-stone-600 ">
      <h1 className="text-4xl text-center text-slate-600 pt-16  font-bold">
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
  );
};

export default Home;
