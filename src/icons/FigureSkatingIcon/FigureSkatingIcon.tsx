import { IconProps } from "../../types"

export default function FigureSkatingIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.164410769790535 37.392578125"
          className={className}
        >
          <path
            d="              M19.852 6.9045C21.752 6.9045 23.297 5.3455 23.297 3.4455C23.297 1.5445 21.752 -0.0005 19.852 -0.0005C17.952 -0.0005 16.393 1.5445 16.393 3.4455C16.393 5.3455 17.952 6.9045 19.852 6.9045ZM8.203 33.5645H18.198C19.893 33.5645 21.397 33.1815 22.518 32.1975C23.27 31.5545 23.16 30.7075 22.682 30.2015C22.244 29.7365 21.493 29.5585 20.795 30.1055C20.153 30.5975 19.578 30.8165 18.498 30.8575V23.8985C18.498 23.4195 18.362 22.9415 18.034 22.5035L14.547 18.0605L17.473 13.5625C17.569 13.4255 17.733 13.4255 17.801 13.5625L18.799 15.5855C19.1 16.2015 19.729 16.5705 20.399 16.5705H26.373C27.358 16.5705 28.164 15.7775 28.164 14.7655C28.164 13.7675 27.358 12.9605 26.373 12.9605H21.52L20.043 9.9805C19.387 8.6265 17.952 7.7515 16.434 7.7515H8.504C7.916 7.7515 7.301 8.0805 6.987 8.5725L4.006 13.0425C3.473 13.8495 3.692 14.9705 4.526 15.5315C5.346 16.0915 6.467 15.8455 7.041 15.0115L9.461 11.3615H11.334C11.457 11.3615 11.526 11.4435 11.457 11.5525L9.16 14.9845C8.299 16.2835 8.477 18.0195 9.584 19.1265L14.889 24.4585V30.8575H8.203C6.932 30.8575 6.317 30.6525 5.606 30.1055C4.922 29.5585 4.17 29.7365 3.733 30.1875C3.241 30.6935 3.145 31.5545 3.883 32.1975C5.004 33.1815 6.508 33.5645 8.203 33.5645ZM0.629 21.3415L6.467 26.4555C7.575 27.4125 8.819 26.8925 9.352 26.0725L11.211 23.1875L8.368 20.3575C8.327 20.3025 8.272 20.2485 8.217 20.1795L7.192 22.2855L2.994 18.6075C2.256 17.9785 1.108 18.0195 0.438 18.7855C-0.218 19.5375 -0.123 20.6715 0.629 21.3415ZM8.203 37.3925C9.065 37.3925 9.748 36.7085 9.748 35.8475C9.748 34.9995 9.065 34.3025 8.203 34.3025C7.356 34.3025 6.672 34.9995 6.672 35.8475C6.672 36.7085 7.356 37.3925 8.203 37.3925ZM18.198 37.3925C19.045 37.3925 19.729 36.7085 19.729 35.8475C19.729 34.9995 19.045 34.3025 18.198 34.3025C17.336 34.3025 16.653 34.9995 16.653 35.8475C16.653 36.7085 17.336 37.3925 18.198 37.3925Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.08625452100089 35.765625"
          className={className}
        >
          <path
            d="              M19.1429 6.4396C20.9199 6.4396 22.3559 4.9906 22.3559 3.2126C22.3559 1.4356 20.9199 -0.0004 19.1429 -0.0004C17.3659 -0.0004 15.9159 1.4356 15.9159 3.2126C15.9159 4.9906 17.3659 6.4396 19.1429 6.4396ZM7.8359 32.2796H17.5979C19.2109 32.2796 20.5789 31.9376 21.6309 31.0216C22.1919 30.5296 22.1369 29.9006 21.8089 29.5036C21.4669 29.1076 20.8519 28.9436 20.2779 29.3806C19.5799 29.9276 18.8969 30.1606 17.6799 30.1736V22.6956C17.6799 22.2576 17.5569 21.8206 17.2559 21.4376L13.7969 17.0356L16.7369 12.5376C16.8729 12.3186 17.1609 12.3186 17.2699 12.5506L18.2539 14.5466C18.5279 15.0806 19.0879 15.4216 19.6899 15.4216H25.4869C26.3619 15.4216 27.0859 14.7246 27.0859 13.8226C27.0859 12.9476 26.3619 12.2226 25.4869 12.2226H20.6739L19.1979 9.2286C18.5819 7.9706 17.2559 7.1506 15.8339 7.1506H8.1229C7.5899 7.1506 7.0569 7.4376 6.7699 7.8886L3.8849 12.2226C3.4069 12.9476 3.5979 13.9456 4.3359 14.4376C5.0609 14.9436 6.0589 14.7246 6.5649 13.9726L8.9709 10.3636H11.0629C11.2129 10.3636 11.3089 10.4866 11.2129 10.6226L8.8749 14.1226C8.0819 15.3126 8.2459 16.9396 9.2719 17.9646L14.4669 23.1876V30.1736H7.8359C6.5509 30.1736 5.8679 29.9416 5.1429 29.3806C4.5959 28.9566 4.0079 29.0936 3.6659 29.4496C3.2839 29.8456 3.2149 30.5156 3.8029 31.0216C4.8419 31.9376 6.2229 32.2796 7.8359 32.2796ZM0.5629 20.0976L6.2369 25.0746C7.2209 25.9356 8.3289 25.4706 8.8209 24.7326L10.8029 21.6566L8.2189 19.0726C8.1779 19.0316 8.1369 18.9906 8.0959 18.9356L6.8929 21.3696L2.6679 17.6776C1.9979 17.1176 0.9869 17.1446 0.3989 17.8286C-0.1891 18.4976 -0.1211 19.5096 0.5629 20.0976ZM7.8359 35.7656C8.5879 35.7656 9.1899 35.1506 9.1899 34.3986C9.1899 33.6606 8.5879 33.0446 7.8359 33.0446C7.0839 33.0446 6.4689 33.6606 6.4689 34.3986C6.4689 35.1506 7.0839 35.7656 7.8359 35.7656ZM17.5979 35.7656C18.3499 35.7656 18.9519 35.1506 18.9519 34.3986C18.9519 33.6606 18.3499 33.0446 17.5979 33.0446C16.8459 33.0446 16.2309 33.6606 16.2309 34.3986C16.2309 35.1506 16.8459 35.7656 17.5979 35.7656Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.659014831100087 36.626953125"
          className={className}
        >
          <path
            d="              M19.5105 6.6854C21.3565 6.6854 22.8605 5.1954 22.8605 3.3494C22.8605 1.5044 21.3565 0.0004 19.5105 0.0004C17.6645 0.0004 16.1745 1.5044 16.1745 3.3494C16.1745 5.1954 17.6645 6.6854 19.5105 6.6854ZM8.0265 32.9634H17.9105C19.5655 32.9634 21.0145 32.5934 22.0945 31.6504C22.7645 31.0764 22.6825 30.3244 22.2725 29.8734C21.8755 29.4354 21.1925 29.2714 20.5495 29.7634C19.8795 30.2834 19.2505 30.5154 18.1165 30.5434V23.3374C18.1165 22.8734 17.9795 22.4214 17.6645 21.9984L14.1925 17.5824L17.1315 13.0844C17.2415 12.9064 17.4595 12.9064 17.5555 13.0974L18.5395 15.1074C18.8275 15.6814 19.4285 16.0374 20.0575 16.0374H25.9505C26.8935 16.0374 27.6595 15.2854 27.6595 14.3284C27.6595 13.3844 26.8935 12.6194 25.9505 12.6194H21.1235L19.6475 9.6254C19.0045 8.3264 17.6235 7.4784 16.1475 7.4784H8.3275C7.7665 7.4784 7.1925 7.7794 6.8775 8.2574L3.9525 12.6604C3.4465 13.4254 3.6515 14.4924 4.4305 15.0114C5.2095 15.5454 6.2765 15.3264 6.8095 14.5334L9.2295 10.8964H11.2115C11.3345 10.8964 11.4165 10.9924 11.3345 11.1154L9.0245 14.5874C8.1905 15.8324 8.3685 17.5134 9.4345 18.5804L14.6845 23.8714V30.5434H8.0265C6.7545 30.5434 6.0985 30.3244 5.3875 29.7634C4.7585 29.2714 4.0885 29.4354 3.6925 29.8454C3.2685 30.2964 3.1725 31.0764 3.8425 31.6504C4.9365 32.5934 6.3715 32.9634 8.0265 32.9634ZM0.5885 20.7544L6.3585 25.7984C7.4105 26.7144 8.5865 26.2224 9.0925 25.4434L11.0205 22.4624L8.2995 19.7554C8.2585 19.7014 8.2035 19.6604 8.1625 19.6054L7.0555 21.8614L2.8305 18.1704C2.1335 17.5824 1.0535 17.6094 0.4245 18.3344C-0.2045 19.0584 -0.1225 20.1254 0.5885 20.7544ZM8.0265 36.6274C8.8325 36.6274 9.4895 35.9704 9.4895 35.1774C9.4895 34.3714 8.8325 33.7144 8.0265 33.7144C7.2195 33.7144 6.5775 34.3714 6.5775 35.1774C6.5775 35.9704 7.2195 36.6274 8.0265 36.6274ZM17.9105 36.6274C18.7175 36.6274 19.3605 35.9704 19.3605 35.1774C19.3605 34.3714 18.7175 33.7144 17.9105 33.7144C17.1045 33.7144 16.4485 34.3714 16.4485 35.1774C16.4485 35.9704 17.1045 36.6274 17.9105 36.6274Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.29610672276549 33.236328125"
          className={className}
        >
          <path
            d="              M17.9408 5.8101C19.5538 5.8101 20.8388 4.5121 20.8388 2.8981C20.8388 1.2991 19.5538 0.0001 17.9408 0.0001C16.3278 0.0001 15.0288 1.2991 15.0288 2.8981C15.0288 4.5121 16.3278 5.8101 17.9408 5.8101ZM7.2488 30.0921H16.6688C18.1458 30.0921 19.3078 29.7911 20.2378 28.9981C20.5518 28.7251 20.5378 28.3831 20.3738 28.1371C20.1968 27.8771 19.7998 27.7541 19.4448 28.0271C18.7058 28.6011 17.9408 28.8481 16.6688 28.8481H16.3958V20.9731C16.3958 20.5761 16.3138 20.2071 16.0398 19.8511L12.7048 15.6131L15.5478 11.2521C15.7398 10.9651 16.1358 10.9651 16.2868 11.2931L17.2298 13.1931C17.4618 13.6441 17.9268 13.9451 18.4468 13.9451H23.9288C24.6808 13.9451 25.2958 13.3441 25.2958 12.5781C25.2958 11.8261 24.6808 11.2251 23.9288 11.2251H19.2938L17.8588 8.3121C17.2848 7.1641 16.1088 6.4391 14.8098 6.4391H7.5228C7.0718 6.4391 6.6338 6.6721 6.3738 7.0551L3.6538 11.1561C3.2438 11.7711 3.4078 12.6191 4.0368 13.0291C4.6378 13.4531 5.4858 13.2751 5.9228 12.6461L8.2468 9.1601H10.4898C10.6808 9.1601 10.7768 9.3241 10.6808 9.4881L8.3708 12.9471C7.6598 14.0141 7.7958 15.4631 8.7118 16.3791L13.6888 21.3691V28.8481H7.2488C5.9778 28.8481 5.2118 28.6011 4.4878 28.0271C4.1458 27.7681 3.7898 27.8501 3.5988 28.0821C3.3798 28.3011 3.3388 28.6971 3.6808 28.9981C4.6108 29.7911 5.7868 30.0921 7.2488 30.0921ZM0.4818 18.4021L5.8408 23.0921C6.6888 23.8441 7.6318 23.4341 8.0558 22.7911L10.1478 19.5641L7.8918 17.2951C7.8508 17.2541 7.8238 17.2261 7.7828 17.1991L6.4148 19.9471L2.2728 16.3381C1.7118 15.8461 0.8368 15.8871 0.3448 16.4611C-0.1612 17.0351 -0.1062 17.8961 0.4818 18.4021ZM7.2488 33.2361C7.8648 33.2361 8.3838 32.7171 8.3838 32.0881C8.3838 31.4731 7.8648 30.9531 7.2488 30.9531C6.6338 30.9531 6.1148 31.4731 6.1148 32.0881C6.1148 32.7171 6.6338 33.2361 7.2488 33.2361ZM16.6688 33.2361C17.2978 33.2361 17.8038 32.7171 17.8038 32.0881C17.8038 31.4731 17.2978 30.9531 16.6688 30.9531C16.0538 30.9531 15.5348 31.4731 15.5348 32.0881C15.5348 32.7171 16.0538 33.2361 16.6688 33.2361Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.38287156010269 34.7265625"
          className={className}
        >
          <path
            d="              M18.6858 6.1387C20.3808 6.1387 21.7478 4.7717 21.7478 3.0757C21.7478 1.3667 20.3808 -0.0003 18.6858 -0.0003C16.9898 -0.0003 15.6098 1.3667 15.6098 3.0757C15.6098 4.7717 16.9898 6.1387 18.6858 6.1387ZM7.5838 31.4587H17.1958C18.7538 31.4587 20.0528 31.1307 21.0508 30.2697C21.5018 29.8867 21.4748 29.3807 21.2288 29.0527C20.9688 28.7107 20.4358 28.5467 19.9438 28.9297C19.2188 29.4907 18.4808 29.7367 17.1958 29.7367H17.1548V21.9297C17.1548 21.5057 17.0448 21.1227 16.7578 20.7407L13.3128 16.3787L16.2518 11.8807C16.4298 11.6207 16.7848 11.6207 16.9218 11.9077L17.9058 13.8907C18.1528 14.3687 18.6578 14.6977 19.2188 14.6977H24.9058C25.7128 14.6977 26.3828 14.0407 26.3828 13.2207C26.3828 12.4137 25.7128 11.7437 24.9058 11.7437H20.1348L18.6448 8.7637C18.0568 7.5467 16.7988 6.7817 15.4318 6.7817H7.8578C7.3788 6.7817 6.8868 7.0277 6.6268 7.4377L3.7968 11.7027C3.3458 12.3727 3.5238 13.2887 4.2068 13.7407C4.8768 14.2047 5.7928 13.9997 6.2578 13.3167L8.6508 9.7207H10.8788C11.0568 9.7207 11.1528 9.8707 11.0568 10.0347L8.6918 13.5757C7.9398 14.6977 8.0898 16.2417 9.0608 17.2127L14.2008 22.3667V29.7367H7.5838C6.2988 29.7367 5.5738 29.4907 4.8498 28.9297C4.3848 28.5607 3.8928 28.6837 3.6058 28.9847C3.3048 29.3127 3.2498 29.8597 3.7418 30.2697C4.7398 31.1307 6.0258 31.4587 7.5838 31.4587ZM0.5018 19.3047L6.0798 24.1857C6.9958 24.9917 8.0218 24.5547 8.4588 23.8707L10.5368 20.6717L8.1168 18.2517C8.0898 18.2107 8.0488 18.1697 8.0078 18.1287L6.6958 20.7947L2.4438 17.0757C1.8418 16.5567 0.8988 16.5977 0.3648 17.2127C-0.1682 17.8277 -0.1132 18.7577 0.5018 19.3047ZM7.5838 34.7267C8.2678 34.7267 8.8278 34.1657 8.8278 33.4827C8.8278 32.7987 8.2678 32.2387 7.5838 32.2387C6.9008 32.2387 6.3398 32.7987 6.3398 33.4827C6.3398 34.1657 6.9008 34.7267 7.5838 34.7267ZM17.1958 34.7267C17.8788 34.7267 18.4528 34.1657 18.4528 33.4827C18.4528 32.7987 17.8788 32.2387 17.1958 32.2387C16.5258 32.2387 15.9508 32.7987 15.9508 33.4827C15.9508 34.1657 16.5258 34.7267 17.1958 34.7267Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.989877950393762 34.138671875"
          className={className}
        >
          <path
            d="              M18.4293 5.9746C20.0833 5.9746 21.4233 4.6346 21.4233 2.9806C21.4233 1.3266 20.0833 -0.0004 18.4293 -0.0004C16.7753 -0.0004 15.4493 1.3266 15.4493 2.9806C15.4493 4.6346 16.7753 5.9746 18.4293 5.9746ZM7.4513 30.9946H16.9933C18.5113 30.9946 19.7553 30.6796 20.7263 29.8456C21.1223 29.5176 21.1093 29.0936 20.9173 28.8066C20.6993 28.4786 20.2063 28.3146 19.7553 28.6566C19.0313 29.2306 18.2653 29.4766 16.9933 29.4766H16.8573V21.5056C16.8573 21.0956 16.7613 20.7126 16.4883 20.3576L13.0563 15.9956L15.9823 11.5116C16.1733 11.2246 16.5833 11.2246 16.7343 11.5526L17.7043 13.5076C17.9513 13.9726 18.4293 14.2876 18.9623 14.2876H24.5953C25.3613 14.2876 25.9903 13.6586 25.9903 12.8786C25.9903 12.1136 25.3613 11.4846 24.5953 11.4846H19.8243L18.3473 8.4906C17.7593 7.3146 16.5563 6.5626 15.2163 6.5626H7.7243C7.2593 6.5626 6.8083 6.7946 6.5483 7.1916L3.7453 11.4156C3.3223 12.0446 3.4993 12.9196 4.1423 13.3436C4.7713 13.7816 5.6463 13.6036 6.0833 12.9476L8.4763 9.3656H10.7863C10.9643 9.3656 11.0743 9.5296 10.9643 9.7066L8.5993 13.2616C7.8613 14.3556 8.0113 15.8456 8.9543 16.7886L14.0543 21.9156V29.4766H7.4513C6.1653 29.4766 5.4133 29.2306 4.6753 28.6566C4.2653 28.3416 3.8273 28.4516 3.5953 28.7246C3.3223 29.0116 3.2813 29.4766 3.7043 29.8456C4.6753 30.6796 5.9193 30.9946 7.4513 30.9946ZM0.4923 18.8536L6.0013 23.6796C6.8763 24.4586 7.8473 24.0486 8.2713 23.3786L10.3903 20.1116L8.0663 17.7876C8.0383 17.7456 8.0113 17.7186 7.9703 17.6776L6.5893 20.4536L2.3243 16.7346C1.7493 16.2426 0.8613 16.2836 0.3553 16.8706C-0.1647 17.4586 -0.1097 18.3476 0.4923 18.8536ZM7.4513 34.1386C8.0933 34.1386 8.6403 33.6056 8.6403 32.9626C8.6403 32.3206 8.0933 31.7736 7.4513 31.7736C6.8083 31.7736 6.2613 32.3206 6.2613 32.9626C6.2613 33.6056 6.8083 34.1386 7.4513 34.1386ZM16.9933 34.1386C17.6363 34.1386 18.1693 33.6056 18.1693 32.9626C18.1693 32.3206 17.6363 31.7736 16.9933 31.7736C16.3513 31.7736 15.8043 32.3206 15.8043 32.9626C15.8043 33.6056 16.3513 34.1386 16.9933 34.1386Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.68438763559251 35.177734375"
          className={className}
        >
          <path
            d="              M18.8776 6.2755C20.6146 6.2755 22.0086 4.8675 22.0086 3.1305C22.0086 1.4085 20.6146 0.0005 18.8776 0.0005C17.1416 0.0005 15.7466 1.4085 15.7466 3.1305C15.7466 4.8675 17.1416 6.2755 18.8776 6.2755ZM7.6946 31.8145H17.3736C18.9466 31.8145 20.2726 31.4865 21.2976 30.5975C21.8036 30.1605 21.7626 29.6135 21.4756 29.2445C21.1886 28.8755 20.6146 28.7105 20.0806 29.1215C19.3696 29.6815 18.6456 29.9145 17.3736 29.9275V22.2575C17.3736 21.8345 17.2646 21.4235 16.9776 21.0415L13.5186 16.6525L16.4576 12.1685C16.6216 11.9215 16.9496 11.9215 17.0736 12.1955L18.0576 14.1775C18.3176 14.6835 18.8366 15.0115 19.4106 15.0115H25.1536C26.0006 15.0115 26.6846 14.3415 26.6846 13.4805C26.6846 12.6465 26.0006 11.9495 25.1536 11.9495H20.3676L18.8776 8.9685C18.2766 7.7385 16.9906 6.9455 15.6106 6.9455H7.9676C7.4756 6.9455 6.9556 7.2055 6.6826 7.6285L3.8246 11.9355C3.3736 12.6195 3.5516 13.5765 4.2626 14.0415C4.9466 14.5195 5.9036 14.3145 6.3816 13.6035L8.7876 9.9945H10.9616C11.1256 9.9945 11.2216 10.1445 11.1256 10.2945L8.7746 13.8085C7.9946 14.9705 8.1586 16.5435 9.1566 17.5415L14.3246 22.7225V29.9275H7.6946C6.4086 29.9275 5.6986 29.6815 4.9736 29.1215C4.4676 28.7385 3.9346 28.8615 3.6336 29.1895C3.2916 29.5445 3.2376 30.1465 3.7566 30.5975C4.7816 31.4865 6.1086 31.8145 7.6946 31.8145ZM0.5306 19.6465L6.1496 24.5685C7.0926 25.4025 8.1456 24.9515 8.6106 24.2405L10.6476 21.0955L8.1586 18.6075C8.1316 18.5665 8.0906 18.5255 8.0496 18.4845L6.7786 21.0415L2.5396 17.3355C1.9106 16.8025 0.9406 16.8305 0.3796 17.4865C-0.1804 18.1155 -0.1124 19.0855 0.5306 19.6465ZM7.6946 35.1775C8.4056 35.1775 8.9926 34.5895 8.9926 33.8785C8.9926 33.1685 8.4056 32.5805 7.6946 32.5805C6.9836 32.5805 6.3956 33.1685 6.3956 33.8785C6.3956 34.5895 6.9836 35.1775 7.6946 35.1775ZM17.3736 35.1775C18.0846 35.1775 18.6726 34.5895 18.6726 33.8785C18.6726 33.1685 18.0846 32.5805 17.3736 32.5805C16.6626 32.5805 16.0746 33.1685 16.0746 33.8785C16.0746 34.5895 16.6626 35.1775 17.3736 35.1775Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.34736727665958 32.033203125"
          className={className}
        >
          <path
            d="              M17.2794 5.6052C18.8244 5.6052 20.0684 4.3472 20.0684 2.7892C20.0684 1.2442 18.8244 0.0002 17.2794 0.0002C15.7344 0.0002 14.4764 1.2442 14.4764 2.7892C14.4764 4.3472 15.7344 5.6052 17.2794 5.6052ZM6.9704 28.8892H16.2404C17.6344 28.8892 18.7004 28.6152 19.5624 27.8772C19.7944 27.6852 19.7814 27.4262 19.6444 27.2622C19.5214 27.0972 19.2474 27.0152 19.0014 27.1932C18.2634 27.7672 17.4844 28.0142 16.2404 28.0142H15.7884V20.2622C15.7884 19.8922 15.7064 19.5372 15.4474 19.1952L12.2344 15.1072L14.9684 10.9102C15.1464 10.6372 15.5294 10.6372 15.6794 10.9512L16.5814 12.7832C16.8004 13.2072 17.2654 13.5082 17.7574 13.5082H23.0344C23.7594 13.5082 24.3474 12.9202 24.3474 12.1952C24.3474 11.4712 23.7594 10.8832 23.0344 10.8832H18.5774L17.1834 8.0662C16.6364 6.9722 15.5014 6.2752 14.2574 6.2752H7.2434C6.8064 6.2752 6.3824 6.4942 6.1364 6.8632L3.5114 10.8142C3.1154 11.4162 3.2794 12.2222 3.8804 12.6192C4.4684 13.0292 5.2884 12.8652 5.6994 12.2502L7.9274 8.8872H10.1014C10.2794 8.8872 10.3744 9.0512 10.2794 9.2152L8.0504 12.5512C7.3804 13.5762 7.5034 14.9712 8.3924 15.8592L13.1774 20.6582V28.0142H6.9704C5.7264 28.0142 4.9474 27.7672 4.2084 27.1932C3.9764 27.0152 3.7304 27.0702 3.5934 27.2212C3.4294 27.3852 3.4024 27.6582 3.6484 27.8772C4.5094 28.6152 5.5754 28.8892 6.9704 28.8892ZM0.4494 17.7872L5.6164 22.3122C6.4374 23.0372 7.3394 22.6402 7.7494 22.0252L9.8144 18.8402L7.6264 16.6382C7.5994 16.6112 7.5724 16.5842 7.5314 16.5562L6.1634 19.2912L2.1714 15.8052C1.6384 15.3402 0.8044 15.3812 0.3254 15.9282C-0.1526 16.4742 -0.0976 17.3082 0.4494 17.7872ZM6.9704 32.0332C7.5584 32.0332 8.0504 31.5412 8.0504 30.9532C8.0504 30.3652 7.5584 29.8872 6.9704 29.8872C6.3824 29.8872 5.8904 30.3652 5.8904 30.9532C5.8904 31.5412 6.3824 32.0332 6.9704 32.0332ZM16.2404 32.0332C16.8274 32.0332 17.3204 31.5412 17.3204 30.9532C17.3204 30.3652 16.8274 29.8872 16.2404 29.8872C15.6524 29.8872 15.1594 30.3652 15.1594 30.9532C15.1594 31.5412 15.6524 32.0332 16.2404 32.0332Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.872348468081093 31.41796875"
          className={className}
        >
          <path
            d="              M16.9409 5.482C18.4579 5.482 19.6749 4.252 19.6749 2.734C19.6749 1.217 18.4579 0 16.9409 0C15.4229 0 14.1929 1.217 14.1929 2.734C14.1929 4.252 15.4229 5.482 16.9409 5.482ZM6.8369 28.273H16.0249C17.3919 28.273 18.3899 28.014 19.2239 27.303C19.4149 27.139 19.4019 26.934 19.2789 26.797C19.1829 26.687 18.9779 26.633 18.7859 26.769C18.0479 27.33 17.2689 27.59 16.0249 27.59H15.4779V19.893C15.4779 19.537 15.4099 19.182 15.1499 18.853L11.9919 14.848L14.6709 10.732C14.8489 10.459 15.2179 10.459 15.3689 10.773L16.2569 12.564C16.4759 12.975 16.9269 13.275 17.4189 13.275H22.5869C23.2979 13.275 23.8719 12.701 23.8719 11.99C23.8719 11.279 23.2979 10.705 22.5869 10.705H18.2119L16.8589 7.943C16.3119 6.863 15.2039 6.18 13.9879 6.18H7.0969C6.6869 6.18 6.2629 6.398 6.0169 6.768L3.4469 10.623C3.0639 11.225 3.2139 12.018 3.8019 12.4C4.3759 12.81 5.1829 12.646 5.5789 12.045L7.7809 8.75H9.8999C10.0779 8.75 10.1869 8.9 10.0779 9.064L7.9039 12.332C7.2339 13.344 7.3569 14.711 8.2319 15.572L12.9209 20.275V27.59H6.8369C5.5929 27.59 4.8139 27.33 4.0759 26.769C3.8979 26.633 3.7059 26.66 3.5969 26.783C3.4599 26.906 3.4469 27.125 3.6379 27.303C4.4719 28.014 5.4839 28.273 6.8369 28.273ZM0.4389 17.473L5.5109 21.902C6.3179 22.613 7.2059 22.23 7.6029 21.629L9.6399 18.471L7.5069 16.31C7.4659 16.269 7.4529 16.256 7.4109 16.215L6.0579 18.935L2.1339 15.531C1.6149 15.066 0.7939 15.107 0.3159 15.641C-0.1491 16.187 -0.0941 17.008 0.4389 17.473ZM6.8369 31.418C7.4109 31.418 7.8759 30.939 7.8759 30.365C7.8759 29.791 7.4109 29.326 6.8369 29.326C6.2629 29.326 5.7979 29.791 5.7979 30.365C5.7979 30.939 6.2629 31.418 6.8369 31.418ZM16.0249 31.418C16.5989 31.418 17.0779 30.939 17.0779 30.365C17.0779 29.791 16.5989 29.326 16.0249 29.326C15.4509 29.326 14.9859 29.791 14.9859 30.365C14.9859 30.939 15.4509 31.418 16.0249 31.418Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}