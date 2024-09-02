import { IconProps } from "../../types"

export default function HammerFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.124831655676246 35.47035794679857"
          className={className}
        >
          <path
            d="              M29.9824 20.8125C31.0764 21.8645 32.4704 21.9195 33.4824 20.8945L37.4064 16.9565C38.4044 15.9445 38.3494 14.5505 37.3244 13.4705L36.4494 12.5815C35.6564 11.7755 35.0544 11.6655 34.2204 11.7475L33.1954 11.8575L32.4164 11.0915L32.7034 9.7925C32.9904 8.4665 32.5394 7.2765 31.2674 6.0055L28.6694 3.3945C24.3764 -0.8855 16.1054 -1.2545 11.8674 3.0665C10.9234 4.0235 10.8554 5.2395 11.3754 6.0735C11.8804 6.8665 12.9064 7.3315 14.2594 6.9765C16.3784 6.4015 18.4844 6.1965 19.9474 6.9765L19.3594 8.4935C18.7714 9.9975 18.9764 11.2005 20.0704 12.3085L22.5584 14.8105C23.7894 16.0405 24.9374 16.4785 26.3044 16.1915L27.6174 15.9035L28.4104 16.6695L28.2464 17.7225C28.1234 18.5285 28.2874 19.1445 29.1214 19.9645ZM3.8414 34.3065C5.4684 35.9335 7.6564 35.8785 9.2554 33.9915L22.5314 18.3375L17.1304 12.9375L1.4764 26.2125C-0.4106 27.8125 -0.4646 29.9995 1.1754 31.6405Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.92933313922065 33.483838458989226"
          className={className}
        >
          <path
            d="              M28.7075 19.8437C29.5415 20.6507 30.5815 20.6917 31.3605 19.8987L35.3795 15.8927C36.1455 15.1267 36.1045 14.0607 35.2975 13.2397L34.3685 12.3107C33.7115 11.6407 33.2475 11.5447 32.5365 11.6137L31.2235 11.7497L30.3215 10.8617L30.7045 9.2477C30.9635 8.1137 30.5535 7.0197 29.4185 5.8847L26.7525 3.2187C22.7065 -0.8143 15.0635 -1.2113 10.9755 2.9047C10.1825 3.7107 10.2095 4.6817 10.6745 5.3377C11.0985 5.8987 11.8645 6.1987 12.7805 5.9527C15.1725 5.2697 17.3735 5.0917 19.1105 6.0757L18.2905 8.2087C17.7705 9.5487 17.9895 10.5607 18.9055 11.4897L21.6665 14.2657C22.5695 15.1547 23.4445 15.4547 24.5655 15.2227L26.3155 14.8667L27.2315 15.7557L27.0675 17.0817C26.9855 17.7927 27.0945 18.2717 27.7785 18.9277ZM3.4835 32.4767C4.9055 33.8987 6.7095 33.8297 8.1185 32.1757L21.2565 16.9457L16.5535 12.2417L1.2955 25.3537C-0.3445 26.7757 -0.4135 28.5797 1.0085 30.0017Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.08609647258234 34.52737665711565"
          className={className}
        >
          <path
            d="              M29.3946 20.341C30.3656 21.284 31.5826 21.339 32.4846 20.423L36.4496 16.444C37.3376 15.555 37.2836 14.325 36.3676 13.368L35.4786 12.452C34.7406 11.7 34.2076 11.604 33.4276 11.686L32.2656 11.796L31.4316 10.975L31.7596 9.54C32.0336 8.296 31.6096 7.147 30.3926 5.944L27.7676 3.305C23.5976 -0.851 15.6136 -1.234 11.4436 2.991C10.5826 3.866 10.5546 4.973 11.0466 5.725C11.5116 6.409 12.4146 6.792 13.5626 6.491C15.8046 5.862 17.9646 5.671 19.5506 6.546L18.8536 8.364C18.3066 9.772 18.5116 10.893 19.5236 11.919L22.1346 14.544C23.2146 15.624 24.2406 15.993 25.4846 15.733L27.0016 15.405L27.8496 16.239L27.6996 17.415C27.5766 18.18 27.7266 18.727 28.4926 19.466ZM3.6776 33.438C5.2096 34.97 7.2186 34.901 8.7226 33.138L21.9296 17.675L16.8576 12.602L1.3946 25.809C-0.3824 27.313 -0.4374 29.323 1.0936 30.868Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.251379021986935 31.02382289067848"
          className={className}
        >
          <path
            d="              M27.2163 18.6596C27.7083 19.1516 28.2553 19.1796 28.7613 18.6866L32.9173 14.5446C33.3823 14.0656 33.3553 13.4916 32.8763 12.9996L31.8373 11.9746C31.2633 11.3996 30.9353 11.3316 30.2653 11.3726L28.9393 11.4956L27.7773 10.3476L28.2013 8.5566C28.4063 7.6126 28.1193 6.7656 27.2163 5.8766L24.3313 3.0056C20.5723 -0.7274 13.8043 -1.1234 10.0583 2.6086C9.4563 3.2106 9.5393 3.8936 9.9083 4.3176C10.1953 4.6186 10.6733 4.7966 11.1523 4.6596C13.7903 3.9896 16.0873 3.9076 18.0833 5.2066L17.0173 7.8586C16.5933 8.9116 16.8123 9.6906 17.5093 10.4016L20.6133 13.5056C21.1323 14.0246 21.6383 14.1616 22.4723 13.9976L24.5373 13.5876L25.6853 14.7356L25.5893 16.0486C25.5483 16.7456 25.5893 17.0876 26.1773 17.6616ZM3.0313 30.2126C4.2063 31.3746 5.4923 31.2926 6.6813 29.9386L19.9293 15.0506L16.0463 11.1676L1.0893 24.3336C-0.2777 25.5366 -0.3457 26.8216 0.8163 27.9836Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.53404048670482 32.20618829980968"
          className={className}
        >
          <path
            d="              M27.9039 19.2181C28.5739 19.8611 29.3799 19.9161 30.0089 19.2731L34.0969 15.1991C34.7119 14.5841 34.6709 13.7501 34.0149 13.0931L33.0439 12.1231C32.4699 11.5481 32.0869 11.4661 31.4589 11.5211L29.9679 11.6851L28.9839 10.7141L29.4209 8.8961C29.6679 7.8841 29.2979 6.8591 28.2319 5.7931L25.5249 3.0991C21.6279 -0.7699 14.4099 -1.1799 10.4179 2.7981C9.7199 3.5091 9.8019 4.3301 10.2399 4.8631C10.6089 5.2731 11.2099 5.4781 11.8389 5.2871C14.3959 4.5351 16.6659 4.3841 18.5659 5.4921L17.5949 8.0351C17.1169 9.2521 17.3629 10.1401 18.1689 10.9611L21.1089 13.9141C21.7929 14.5971 22.4759 14.8021 23.4599 14.6111L25.4979 14.1871L26.4679 15.1711L26.3179 16.6621C26.2629 17.3041 26.3319 17.7011 26.9329 18.2751ZM3.2529 31.3041C4.5519 32.5891 6.1109 32.5071 7.3959 31.0171L20.4529 16.0461L16.1869 11.7811L1.1889 24.8101C-0.3011 26.1091 -0.3831 27.6681 0.9019 28.9531Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.751729469845536 31.492817370749094"
          className={className}
        >
          <path
            d="              M27.4426 18.8749C28.0306 19.4359 28.7006 19.4769 29.2606 18.9159L33.3766 14.8289C33.9096 14.2949 33.8686 13.5839 33.2946 13.0239L32.3096 12.0259C31.7766 11.5059 31.4346 11.4239 30.8606 11.4649L29.2606 11.6569L28.2356 10.6309L28.7006 8.7039C28.9326 7.7599 28.5776 6.7619 27.5796 5.7639L24.8316 3.0429C21.0306 -0.7441 14.0306 -1.1681 10.1066 2.7429C9.4506 3.3989 9.5736 4.1369 9.9976 4.6019C10.3256 4.9159 10.8316 5.0799 11.3096 4.9299C13.9626 4.1369 16.2726 3.9869 18.2686 5.1759L17.2156 7.9379C16.7646 9.0999 17.0106 9.9199 17.7496 10.6719L20.7976 13.7209C21.3586 14.2819 21.9466 14.4459 22.8356 14.2679L25.0366 13.8169L26.0476 14.8419L25.8976 16.4419C25.8566 17.0429 25.9116 17.3989 26.4586 17.9049ZM3.1336 30.6469C4.3506 31.8639 5.7726 31.7679 7.0036 30.3599L20.0046 15.5529L15.9856 11.5339L1.1376 24.4949C-0.2844 25.7389 -0.3664 27.1469 0.8506 28.3769Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.136670429715856 32.75480504692286"
          className={className}
        >
          <path
            d="              M28.2471 19.4743C28.9991 20.1993 29.9011 20.2403 30.5981 19.5433L34.6591 15.4963C35.3291 14.8123 35.2881 13.8833 34.5771 13.1583L33.6201 12.2013C33.0041 11.5863 32.5811 11.5043 31.9241 11.5583L30.5161 11.7093L29.5591 10.7793L29.9691 9.0433C30.2291 7.9763 29.8461 6.9243 28.7521 5.8303L26.0591 3.1503C22.0941 -0.7867 14.6981 -1.1977 10.6651 2.8493C9.9261 3.5883 9.9811 4.4763 10.4321 5.0643C10.8151 5.5293 11.4991 5.7893 12.2511 5.5703C14.7251 4.8593 16.9811 4.6953 18.7991 5.7483L17.8971 8.1133C17.4051 9.3853 17.6371 10.3143 18.4851 11.1893L21.3561 14.0603C22.1351 14.8403 22.9011 15.0863 23.9401 14.8673L25.8541 14.4703L26.7971 15.4273L26.6471 16.8363C26.5791 17.5193 26.6611 17.9433 27.3031 18.5583ZM3.3501 31.8063C4.7041 33.1603 6.3721 33.0643 7.7111 31.5193L20.8091 16.4393L16.3381 11.9823L1.2451 25.0393C-0.3279 26.3923 -0.3959 28.0603 0.9581 29.4003Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.618156268158245 30.41154516784707"
          className={className}
        >
          <path
            d="              M26.9052 18.409C27.3012 18.792 27.6982 18.792 28.1082 18.395L32.3192 14.184C32.7152 13.774 32.7152 13.364 32.3332 12.981L31.2392 11.915C30.5962 11.272 30.2822 11.231 29.4752 11.258L28.5322 11.313L27.2062 9.973L27.5342 8.36C27.7252 7.444 27.5062 6.76 26.7542 6.036L23.6782 2.96C19.9872 -0.704 13.5202 -1.074 9.9932 2.454C9.4732 2.973 9.5002 3.561 9.8012 3.958C10.0342 4.245 10.4712 4.409 10.9502 4.313C13.5882 3.807 15.8442 3.794 17.8542 5.27L16.7602 7.786C16.3642 8.688 16.5552 9.399 17.1982 10.055L20.3702 13.241C20.8342 13.706 21.2452 13.801 21.9972 13.651L23.8972 13.282L25.2232 14.608L25.1822 15.551C25.1552 16.358 25.1682 16.7 25.8252 17.342ZM2.9112 29.634C4.0322 30.741 5.1252 30.673 6.2882 29.387L19.8362 14.403L16.1312 10.698L1.0242 24.124C-0.2608 25.272 -0.3298 26.38 0.7782 27.487Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.28988734590044 30.09941713642523"
          className={className}
        >
          <path
            d="              M26.7557 18.2676C27.0847 18.5956 27.4127 18.5956 27.7677 18.2406L32.0197 13.9886C32.3757 13.6326 32.3757 13.3046 32.0467 12.9766L30.9397 11.8686C30.2557 11.2126 29.9557 11.1716 29.0807 11.1996L28.3287 11.2126L26.9067 9.7906L27.1937 8.2596C27.3717 7.3576 27.1937 6.7696 26.5237 6.1136L23.3377 2.9416C19.6737 -0.6814 13.3717 -1.0504 9.9667 2.3536C9.4747 2.8456 9.4747 3.4066 9.7487 3.7616C9.9537 4.0486 10.3637 4.2126 10.8417 4.1306C13.4807 3.7066 15.7097 3.7476 17.7327 5.3066L16.6387 7.7406C16.2557 8.5746 16.4337 9.2436 17.0357 9.8726L20.2487 13.0996C20.6857 13.5366 21.0547 13.6056 21.7657 13.4686L23.5707 13.1266L24.9927 14.5486L24.9787 15.3006C24.9517 16.1486 24.9517 16.5036 25.6347 17.1736ZM2.8577 29.3416C3.9377 30.4216 4.9357 30.3536 6.0707 29.0956L19.7837 14.0706L16.1877 10.4606L0.9987 24.0096C-0.2593 25.1306 -0.3143 26.1566 0.7517 27.2366Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
