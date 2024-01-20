const Week1 = () => {
  const checkList = {
    all: {
      sentence: "모두 동의합니다",
      require: "",
    },
    age: {
      sentence: "만 14세 이상입니다.",
      require: "",
    },
    terms: {
      sentence: "개인정보 수집 및 서비스 활용 동의.",
      require: "[필수]",
    },
    collection: {
      sentence: "채널 홈페이지 개인정보 제 3자 제공동의.",
      require: "[필수]",
    },
    "provision-homepage": {
      sentence: "개인정보 제 3자 제공동의.",
      require: "[선택]",
    },
    provision: {
      sentence: "개인정보 수집 및 서비스 활용 동의.",
      require: "[선택]",
    },
    marketing: {
      sentence: "마케팅 정보 수신 동의",
      require: "[선택]",
    },
    marketingSns: {
      sentence: "마케팅 정보 sns 수신동의.",
      require: "[선택]",
    },
    marketingEmail: {
      sentence: "마케팅 정보 email 수신동의.",
      require: "[선택]",
    },
  };

  return (
    <>
      <div className="signUp bg-black h-screen flex flex-col justify-center items-center gap-y-24pxr">
        <div className="title text-white text-center">
          <h1 className="text-28pxr mb-8pxr font-bold text-white">회원가입</h1>
          <p className="text-16pxr text-[#898989] font-semibold">
            아이디와 이메일로 간편하게 시작하세요!
          </p>
        </div>
        <form className="w-416pxr flex flex-col gap-y-18pxr">
          <div role="group" className="id">
            <label htmlFor="inputId" className="sr-only">
              아이디
            </label>
            <input
              className="form-input"
              type="text"
              id="inputId"
              placeholder="아이디"
            />
            <span className="inputMessage">
              영문 또는 영문, 숫자 조합 6~12자리
            </span>
          </div>
          <div role="group" className="password">
            <label htmlFor="input-Password" className="sr-only">
              비밀번호
            </label>
            <input
              className="form-input"
              type="password"
              id="input-Password"
              placeholder="비밀번호"
            />
            <span className="inputMessage">
              영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15자리
            </span>
          </div>
          <div role="group" className="password-check">
            <label htmlFor="input-password-check" className="sr-only">
              비밀번호 확인
            </label>
            <input
              className="form-input"
              type="password"
              id="input-password-check"
              placeholder="비밀번호 확인"
            />
            <span className="inputMessage"></span>
          </div>
          <div role="group" className="email">
            <label htmlFor="inputEmail" className="sr-only">
              이메일
            </label>
            <input
              className="form-input"
              type="text"
              id="inputEmail"
              placeholder="이메일"
            />
            <span className="inputMessage"></span>
          </div>
          <div role="group" className="check-list flex flex-col gap-y-8pxr">
            {Object.entries(checkList).map(([key, value]) => {
              const { sentence, require } = value;
              return (
                <div key={key} role="group">
                  <input className="inputList" type="checkbox" id={key} />
                  <label htmlFor={key} className="inputLabel">
                    <span className="ml-2">{require}</span>
                    <span className="ml-1">{sentence}</span>
                  </label>
                </div>
              );
            })}
          </div>
          <button className="w-full bg-[#404040] text-16pxr h-50pxr text-[#898989]">
            확인
          </button>
        </form>
      </div>
    </>
  );
};

export default Week1;
