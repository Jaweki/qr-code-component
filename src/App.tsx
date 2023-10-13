const App = () => {
  return (
    <main className="w-full h-[100vh] flex items-center justify-center">
      <div className="min-[1000px]:flex hidden container bg-light_gray w-3/4 h-[70vh] justify-center items-center p-3">
        <div className="bg-white rounded-lg w-[23%] h-[90%] flex flex-col justify-center items-center p-1">
          <img
            src="/image-qr-code.png"
            alt="box qr code"
            className="w-[90%] h-[60%] rounded-lg"
          />

          <h2 className="text-dark_blue font-tx_bold text-center m-2 ">
            Improve your front-end skills by building projects
          </h2>

          <p className="m-1 font-tx_normal text-center text-grayish_blue text-[12px]">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>

      <div className="max-mobile:flex hidden bg-light_gray w-full h-[100vh] justify-center items-center p-3">
        <div className="bg-white rounded-lg w-3/4 h-[80%] container flex flex-col justify-center items-center p-2">
          <img
            src="/image-qr-code.png"
            alt="box qr code"
            className="w-[90%] h-[60%] rounded-lg"
          />

          <h2 className="text-dark_blue font-tx_bold text-center m-2 ">
            Improve your front-end skills by building projects
          </h2>

          <p className="m-1 font-tx_normal text-center text-grayish_blue text-[12px]">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </main>
  );
};

export default App;
