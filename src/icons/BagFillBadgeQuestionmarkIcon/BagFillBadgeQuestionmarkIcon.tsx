import { IconProps } from "../../types"

export default function BagFillBadgeQuestionmarkIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.15234375 32.689453125"
          className={className}
        >
          <path
            d="              M28.7932 5.7972H27.6442C27.2892 2.3513 24.5552 0.0003 20.7952 0.0003C17.0352 0.0003 14.3142 2.3513 13.9452 5.7972H12.7972C9.4202 5.7972 7.4372 7.7653 7.4372 11.1563V15.5583C12.7422 15.5583 17.1312 19.9473 17.1312 25.2383C17.1312 27.1933 16.5152 29.0393 15.4902 30.5703H28.8342C32.1702 30.5703 34.1522 28.6013 34.1522 25.2113V11.1563C34.1522 7.7653 32.1702 5.7972 28.7932 5.7972ZM20.7952 3.7873C22.0122 3.7873 22.9412 4.5663 23.2282 5.7972H18.3752C18.6482 4.5663 19.5782 3.7873 20.7952 3.7873ZM7.4512 32.6893C11.5252 32.6893 14.9022 29.2853 14.9022 25.2243C14.9022 21.1503 11.5252 17.7873 7.4512 17.7873C3.3632 17.7873 0.0002 21.1503 0.0002 25.2243C0.0002 29.2853 3.3632 32.6893 7.4512 32.6893ZM7.0682 26.8793C6.3032 26.8793 5.5922 26.4963 5.5922 25.7712V25.7033C5.5922 25.1293 6.0152 24.7053 6.6722 24.2403C7.3832 23.7613 7.7792 23.4743 7.7792 23.1333C7.7792 22.8733 7.6012 22.6953 7.3142 22.6953C7.0552 22.6953 6.8772 22.8043 6.5762 23.0783C6.3572 23.2693 6.0432 23.5563 5.4142 23.5563C4.4432 23.5563 3.9922 22.9963 3.9922 22.3813C3.9922 20.9723 5.7692 20.1662 7.4922 20.1662C9.5562 20.1662 11.0742 21.3552 11.0742 22.9553C11.0742 24.2953 10.1032 24.6233 9.3512 25.1293C9.0372 25.3343 8.7772 25.5803 8.6272 25.9353C8.3672 26.5783 7.7242 26.8793 7.0682 26.8793ZM7.0412 30.1743C6.1522 30.1743 5.4962 29.6813 5.4962 28.8343C5.4962 28.0133 6.1522 27.5083 7.0412 27.5083C7.9572 27.5083 8.5862 28.0133 8.5862 28.8343C8.5862 29.6813 7.9572 30.1743 7.0412 30.1743Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.67578125 31.376953125"
          className={className}
        >
          <path
            d="              M27.8501 5.3316H26.0451C25.7301 2.2286 23.2561 -0.0004 19.9341 -0.0004C16.6251 -0.0004 14.1371 2.2286 13.8221 5.3316H12.0181C8.9001 5.3316 7.1911 7.0276 7.1911 10.1306V14.9436C12.2641 14.9436 16.4471 19.1266 16.4471 24.1856C16.4471 25.9626 15.9281 27.6306 15.0391 29.0386H28.0821C30.9801 29.0386 32.6761 27.3436 32.6761 24.2406V10.1306C32.6761 7.0406 30.9671 5.3316 27.8501 5.3316ZM19.9341 2.9256C21.3961 2.9256 22.4761 3.8966 22.7361 5.3316H17.1441C17.4041 3.8966 18.4711 2.9256 19.9341 2.9256ZM7.2051 31.3766C11.1151 31.3766 14.3961 28.1096 14.3961 24.1716C14.3961 20.2346 11.1431 16.9806 7.2051 16.9806C3.2541 16.9806 0.0001 20.2346 0.0001 24.1716C0.0001 28.1226 3.2541 31.3766 7.2051 31.3766ZM6.9451 25.8676C6.3441 25.8676 5.8381 25.5386 5.8381 24.9376V24.8826C5.8381 24.1716 6.2891 23.7476 6.9181 23.2966C7.6431 22.8046 8.0531 22.5176 8.0531 22.0386C8.0531 21.6286 7.7251 21.3416 7.2321 21.3416C6.7951 21.3416 6.5081 21.5466 6.2071 21.8336C5.9611 22.0666 5.7151 22.3396 5.2091 22.3396C4.5121 22.3396 4.1431 21.9156 4.1431 21.3966C4.1431 20.1656 5.7281 19.3866 7.3141 19.3866C9.2011 19.3866 10.5141 20.4526 10.5141 21.9156C10.5141 23.1196 9.6931 23.5016 8.9281 24.0486C8.4901 24.3636 8.2171 24.6096 8.1211 25.0606C7.9571 25.5936 7.5191 25.8676 6.9451 25.8676ZM6.9321 28.8616C6.2071 28.8616 5.6461 28.3966 5.6461 27.6856C5.6461 26.9886 6.2211 26.5096 6.9321 26.5096C7.6841 26.5096 8.2301 26.9886 8.2301 27.6856C8.2171 28.3966 7.6841 28.8616 6.9321 28.8616Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.46875 32.07421875"
          className={className}
        >
          <path
            d="              M28.3558 5.5778H26.9058C26.5648 2.3108 23.9528 -0.0002 20.3988 -0.0002C16.8438 -0.0002 14.2328 2.3108 13.8908 5.5778H12.4418C9.1878 5.5778 7.3278 7.4238 7.3278 10.6778V15.2718C12.5238 15.2718 16.8168 19.5648 16.8168 24.7458C16.8168 26.6188 16.2418 28.3828 15.2848 29.8598H28.4788C31.6228 29.8598 33.4688 28.0138 33.4688 24.7598V10.6778C33.4688 7.4238 31.6098 5.5778 28.3558 5.5778ZM20.3988 3.3908C21.7378 3.3908 22.7228 4.2518 22.9958 5.5778H17.8008C18.0738 4.2518 19.0588 3.3908 20.3988 3.3908ZM7.3418 32.0738C11.3338 32.0738 14.6698 28.7388 14.6698 24.7328C14.6698 20.7268 11.3478 17.4178 7.3418 17.4178C3.3218 17.4178 -0.0002 20.7268 -0.0002 24.7328C-0.0002 28.7388 3.3218 32.0738 7.3418 32.0738ZM7.0138 26.4008C6.3298 26.4008 5.7148 26.0448 5.7148 25.3888V25.3208C5.7148 24.6778 6.1528 24.2538 6.7948 23.8028C7.5058 23.3238 7.9158 23.0368 7.9158 22.6268C7.9158 22.2848 7.6698 22.0668 7.2868 22.0668C6.9458 22.0668 6.6988 22.2168 6.4118 22.4898C6.1798 22.7088 5.8928 22.9828 5.3188 22.9828C4.4848 22.9828 4.0608 22.4898 4.0608 21.9298C4.0608 20.6038 5.7558 19.7968 7.4238 19.7968C9.3928 19.7968 10.8148 20.9318 10.8148 22.4628C10.8148 23.7478 9.9258 24.1038 9.1598 24.6228C8.7908 24.8828 8.5178 25.1288 8.3948 25.5258C8.1758 26.1138 7.6288 26.4008 7.0138 26.4008ZM6.9998 29.5588C6.1938 29.5588 5.5778 29.0798 5.5778 28.3008C5.5778 27.5348 6.1938 27.0428 6.9998 27.0428C7.8338 27.0428 8.4218 27.5348 8.4218 28.3008C8.4218 29.0798 7.8338 29.5588 6.9998 29.5588Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.59765625 29.53125"
          className={className}
        >
          <path
            d="              M26.5646 4.6209H23.8026C23.5426 1.9959 21.4106 -0.0001 18.6896 -0.0001C15.9686 -0.0001 13.8356 1.9959 13.5896 4.6209H10.8286C8.1626 4.6209 6.7946 5.9749 6.7946 8.6129V14.3689C11.4026 14.3689 15.1896 18.1559 15.1896 22.7639C15.1896 24.2679 14.7796 25.6899 14.0546 26.9339H26.8376C29.2306 26.9339 30.5976 25.5669 30.5976 22.9419V8.6129C30.5976 5.9879 29.2306 4.6209 26.5646 4.6209ZM18.6896 1.6129C20.5216 1.6129 21.8746 2.8579 22.0936 4.6209H15.2856C15.5176 2.8579 16.8716 1.6129 18.6896 1.6129ZM6.8086 29.5309C10.4996 29.5309 13.6036 26.4549 13.6036 22.7359C13.6036 19.0039 10.5406 15.9419 6.8086 15.9419C3.0766 15.9419 -0.0004 19.0179 -0.0004 22.7359C-0.0004 26.4829 3.0766 29.5309 6.8086 29.5309ZM6.6856 24.4039C6.2756 24.4039 6.0156 24.1579 6.0156 23.7339V23.6799C6.0156 22.9139 6.4256 22.4899 7.0686 22.0389C7.7926 21.5329 8.2716 21.2329 8.2716 20.5489C8.2716 19.9339 7.7656 19.5369 6.9866 19.5369C6.3296 19.5369 5.8786 19.8519 5.5916 20.1799C5.3596 20.4259 5.1956 20.6719 4.8266 20.6719C4.4566 20.6719 4.2106 20.4259 4.2106 20.0429C4.2106 19.0999 5.5376 18.2789 6.9726 18.2789C8.6266 18.2789 9.6796 19.2499 9.6796 20.4809C9.6796 21.5059 9.0916 21.9429 8.3126 22.5179C7.6836 22.9829 7.4236 23.2419 7.3696 23.8029C7.3416 24.1719 7.1226 24.4039 6.6856 24.4039ZM6.6856 27.0429C6.1526 27.0429 5.7286 26.6059 5.7286 26.0719C5.7286 25.5529 6.1656 25.1149 6.6856 25.1149C7.2326 25.1149 7.6696 25.5529 7.6566 26.0719C7.6566 26.6059 7.2186 27.0429 6.6856 27.0429Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.732421875 30.54296875"
          className={className}
        >
          <path
            d="              M27.248 5.0444H25.006C24.732 2.1464 22.422 0.0004 19.373 0.0004C16.338 0.0004 14.027 2.1604 13.74 5.0444H11.512C8.559 5.0444 7.027 6.5484 7.027 9.4744V14.5334C11.949 14.5334 16.01 18.5934 16.01 23.5154C16.01 25.1564 15.545 26.7144 14.738 28.0544H27.59C30.201 28.0544 31.732 26.5374 31.732 23.6254V9.4744C31.732 6.5624 30.187 5.0444 27.248 5.0444ZM19.373 2.3924C21 2.3924 22.176 3.4594 22.408 5.0444H16.352C16.584 3.4594 17.76 2.3924 19.373 2.3924ZM7.041 30.5434C10.855 30.5434 14.068 27.3434 14.068 23.5024C14.068 19.6464 10.896 16.4604 7.041 16.4604C3.186 16.4604 0 19.6464 0 23.5024C0 27.3714 3.186 30.5434 7.041 30.5434ZM6.877 25.2114C6.357 25.2114 6.002 24.9234 6.002 24.4044V24.3634C6.002 23.5564 6.453 23.1324 7.068 22.6954C7.793 22.1894 8.217 21.9164 8.217 21.3414C8.217 20.8224 7.807 20.4804 7.164 20.4804C6.604 20.4804 6.262 20.7264 5.961 21.0414C5.715 21.2874 5.496 21.5464 5.072 21.5464C4.553 21.5464 4.225 21.2184 4.225 20.7674C4.225 19.6464 5.701 18.8804 7.191 18.8804C8.955 18.8804 10.131 19.8784 10.131 21.2464C10.131 22.3674 9.434 22.7914 8.654 23.3514C8.121 23.7344 7.848 23.9944 7.779 24.5004C7.697 24.9644 7.396 25.2114 6.877 25.2114ZM6.863 28.0274C6.248 28.0274 5.742 27.5624 5.742 26.9474C5.742 26.3324 6.248 25.8674 6.863 25.8674C7.506 25.8674 7.998 26.3324 7.984 26.9474C7.984 27.5624 7.506 28.0274 6.863 28.0274Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.19921875 30.078125"
          className={className}
        >
          <path
            d="              M26.9063 4.881H24.4313C24.1723 2.119 21.9433 0 19.0583 0C16.1873 0 13.9593 2.105 13.6993 4.881H11.2243C8.3673 4.881 6.9313 6.289 6.9313 9.119V14.314C11.7713 14.314 15.7633 18.293 15.7633 23.133C15.7633 24.719 15.3263 26.209 14.5743 27.508H27.3163C29.7633 27.508 31.1993 26.086 31.1993 23.27V9.119C31.1993 6.303 29.7503 4.881 26.9063 4.881ZM19.0583 2.078C20.7813 2.078 21.9983 3.213 22.2163 4.881H15.9143C16.1333 3.213 17.3493 2.078 19.0583 2.078ZM6.9453 30.078C10.7053 30.078 13.8903 26.92 13.8903 23.133C13.8903 19.318 10.7463 16.174 6.9453 16.174C3.1313 16.174 0.0003 19.318 0.0003 23.133C0.0003 26.947 3.1313 30.078 6.9453 30.078ZM6.8223 24.855C6.3573 24.855 6.0843 24.582 6.0843 24.117V24.076C6.0843 23.229 6.5493 22.777 7.1503 22.354C7.8883 21.848 8.3123 21.574 8.3123 20.945C8.3123 20.385 7.8473 20.002 7.1233 20.002C6.5083 20.002 6.1253 20.275 5.8243 20.59C5.5643 20.863 5.3733 21.109 4.9903 21.109C4.5663 21.109 4.2793 20.836 4.2793 20.412C4.2793 19.359 5.6743 18.594 7.1233 18.594C8.8183 18.594 9.9253 19.551 9.9253 20.877C9.9253 21.943 9.2693 22.395 8.4903 22.969C7.9163 23.393 7.6423 23.639 7.5883 24.186C7.5473 24.609 7.3143 24.855 6.8223 24.855ZM6.8223 27.563C6.2613 27.563 5.7973 27.098 5.7973 26.523C5.7973 25.963 6.2613 25.498 6.8223 25.498C7.3963 25.498 7.8613 25.977 7.8613 26.523C7.8473 27.098 7.3963 27.563 6.8223 27.563Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.142578125 30.8984375"
          className={className}
        >
          <path
            d="              M27.5074 5.1545H25.4574C25.1704 2.1875 22.7774 -0.0005 19.6194 -0.0005C16.4614 -0.0005 14.0684 2.1875 13.7814 5.1545H11.7304C8.7094 5.1545 7.0954 6.7535 7.0954 9.7485V14.6975C12.0864 14.6975 16.2014 18.8125 16.2014 23.8025C16.2014 25.4985 15.7094 27.0975 14.8614 28.4785H27.7954C30.5434 28.4785 32.1424 26.8785 32.1424 23.8845V9.7485C32.1424 6.7535 30.5294 5.1545 27.5074 5.1545ZM19.6194 2.6115C21.1774 2.6115 22.2984 3.6365 22.5454 5.1545H16.6934C16.9394 3.6365 18.0604 2.6115 19.6194 2.6115ZM7.1094 30.8985C10.9644 30.8985 14.2054 27.6715 14.2054 23.7895C14.2054 19.8925 11.0054 16.6795 7.1094 16.6795C3.2134 16.6795 0.0004 19.8925 0.0004 23.7895C0.0004 27.6855 3.2134 30.8985 7.1094 30.8985ZM6.9044 25.4845C6.3434 25.4845 5.9334 25.1835 5.9334 24.6365V24.5825C5.9334 23.8165 6.3844 23.3925 7.0004 22.9555C7.7244 22.4495 8.1484 22.1625 8.1484 21.6425C8.1484 21.1645 7.7654 20.8495 7.1914 20.8495C6.6854 20.8495 6.3574 21.0685 6.0564 21.3695C5.8244 21.6155 5.5914 21.8745 5.1274 21.8745C4.5254 21.8745 4.1834 21.5055 4.1834 21.0275C4.1834 19.8655 5.7144 19.0855 7.2464 19.0855C9.0504 19.0855 10.2954 20.1115 10.2954 21.5335C10.2954 22.6815 9.5434 23.0915 8.7634 23.6525C8.2854 24.0075 8.0114 24.2535 7.9294 24.7325C7.8064 25.2245 7.4514 25.4845 6.9044 25.4845ZM6.8904 28.3825C6.2204 28.3825 5.7014 27.9045 5.7014 27.2485C5.7014 26.6055 6.2344 26.1265 6.8904 26.1265C7.5744 26.1265 8.0934 26.6195 8.0934 27.2485C8.0804 27.9045 7.5744 28.3825 6.8904 28.3825Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.77734375 28.833984375"
          className={className}
        >
          <path
            d="              M26.0855 4.2928H22.9415C22.6955 1.8597 20.6995 -0.0003 18.1835 -0.0003C15.6675 -0.0003 13.6715 1.8597 13.4255 4.2928H10.2815C7.8615 4.2928 6.5895 5.5648 6.5895 7.9708V14.4508C10.8695 14.4508 14.4105 17.9918 14.4105 22.2718C14.4105 23.6797 14.0275 25.0198 13.3715 26.1677H26.1675C28.5055 26.1677 29.7775 24.8828 29.7775 22.5038V7.9708C29.7775 5.5918 28.5055 4.2928 26.0855 4.2928ZM18.1835 0.9978C20.1385 0.9978 21.6835 2.3927 21.9165 4.2928H14.4375C14.6835 2.3927 16.2145 0.9978 18.1835 0.9978ZM6.6035 28.8338C10.1995 28.8338 13.1935 25.8537 13.1935 22.2308C13.1935 18.6078 10.2265 15.6268 6.6035 15.6268C2.9805 15.6268 -0.0005 18.6208 -0.0005 22.2308C-0.0005 25.8668 2.9805 28.8338 6.6035 28.8338ZM6.4945 23.8168C6.1385 23.8168 5.9195 23.5978 5.9195 23.2558V23.1737C5.9195 22.5038 6.2205 22.1078 6.9175 21.6148C7.6565 21.1097 8.1895 20.7808 8.1895 20.0298C8.1895 19.3728 7.6285 18.9488 6.7815 18.9488C6.0705 18.9488 5.5375 19.3047 5.2635 19.6328C5.0725 19.8648 4.9355 20.0978 4.6075 20.0978C4.3065 20.0978 4.1155 19.9058 4.1155 19.5778C4.1155 18.7718 5.3185 17.8828 6.7675 17.8828C8.3535 17.8828 9.3375 18.8668 9.3375 19.9888C9.3375 20.9458 8.8325 21.3558 8.0395 21.9297C7.3415 22.4488 7.1235 22.7228 7.0685 23.2968C7.0415 23.6118 6.8355 23.8168 6.4945 23.8168ZM6.4945 26.3728C6.0015 26.3728 5.6195 25.9768 5.6195 25.4847C5.6195 25.0058 6.0155 24.6097 6.4945 24.6097C6.9865 24.6097 7.3965 25.0198 7.3825 25.4847C7.3695 25.9768 6.9725 26.3728 6.4945 26.3728Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.3671875 28.478515625"
          className={className}
        >
          <path
            d="              M25.8538 4.1293H22.5178C22.2718 1.7773 20.3298 0.0003 17.9238 0.0003C15.5308 0.0003 13.5898 1.7773 13.3438 4.1293H10.0078C7.7108 4.1293 6.4938 5.3453 6.4938 7.6423V14.4923C10.6228 14.4923 14.0278 17.9103 14.0278 22.0253C14.0278 23.3793 13.6578 24.6643 13.0158 25.7853H25.8398C28.1508 25.7853 29.3668 24.5273 29.3668 22.2713V7.6423C29.3668 5.3863 28.1508 4.1293 25.8538 4.1293ZM17.9238 0.6833C19.9608 0.6833 21.6018 2.1603 21.8338 4.1293H14.0138C14.2598 2.1603 15.9008 0.6833 17.9238 0.6833ZM6.5078 28.4783C10.0628 28.4783 13.0018 25.5523 13.0018 21.9703C13.0018 18.4023 10.0758 15.4763 6.5078 15.4763C2.9528 15.4763 -0.0002 18.4163 -0.0002 21.9703C-0.0002 25.5523 2.9528 28.4783 6.5078 28.4783ZM6.3988 23.5023C6.0838 23.5023 5.8788 23.3103 5.8788 23.0093V22.9143C5.8788 22.2853 6.1388 21.9023 6.8498 21.3963C7.5878 20.8903 8.1618 20.5483 8.1618 19.7563C8.1618 19.0723 7.5738 18.6343 6.6718 18.6343C5.9468 18.6343 5.3598 19.0173 5.0998 19.3593C4.9358 19.5783 4.8128 19.8103 4.4978 19.8103C4.2378 19.8103 4.0608 19.6323 4.0608 19.3453C4.0608 18.5933 5.2088 17.6643 6.6578 17.6643C8.2308 17.6643 9.1598 18.6623 9.1598 19.7283C9.1598 20.6583 8.6958 21.0413 7.9158 21.6153C7.1778 22.1753 6.9728 22.4633 6.9178 23.0373C6.9038 23.3103 6.7128 23.5023 6.3988 23.5023ZM6.3988 26.0313C5.9338 26.0313 5.5648 25.6483 5.5648 25.1833C5.5648 24.7323 5.9468 24.3493 6.3988 24.3493C6.8628 24.3493 7.2738 24.7463 7.2458 25.1833C7.2328 25.6483 6.8498 26.0313 6.3988 26.0313Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}