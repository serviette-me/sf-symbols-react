import { IconProps } from "../../types"

export default function LockApplewatchIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.4609375 33.55078125"
          className={className}
        >
          <path
            d="              M0.0002 23.0235C0.0002 25.1975 0.7792 26.7695 2.4472 27.9045C3.2952 28.4645 3.8282 29.0665 4.1702 29.8735L5.1132 32.0335C5.5232 33.0035 6.4122 33.5505 7.5472 33.5505H14.3142C15.4632 33.5505 16.3382 33.0035 16.7482 32.0335L17.6912 29.8735C18.0332 29.0665 18.5802 28.4645 19.4142 27.9045C21.0682 26.7695 21.8612 25.2105 21.8612 23.0235V16.0645C22.8052 15.9825 23.4612 15.2445 23.4612 14.1915V12.2085C23.4612 11.1835 22.8052 10.4315 21.8612 10.3495C21.8202 8.2445 21.0272 6.7405 19.4142 5.6465C18.5802 5.0855 18.0332 4.4705 17.6912 3.6775L16.7482 1.5175C16.3512 0.5465 15.4632 0.0005 14.3142 0.0005H7.5472C6.4122 0.0005 5.5232 0.5465 5.1132 1.5175L4.1702 3.6775C3.7872 4.5255 3.2262 5.1545 2.4472 5.6465C0.7792 6.7675 0.0002 8.3395 0.0002 10.5275ZM4.1152 21.9575V11.5935C4.1152 9.7755 5.0992 8.7365 6.8362 8.7365H15.0392C16.7622 8.7365 17.7732 9.7895 17.7732 11.5935V21.9575C17.7732 23.7615 16.7622 24.8005 15.0392 24.8005H6.8362C5.0992 24.8005 4.1152 23.7755 4.1152 21.9575ZM8.5312 21.6015H13.4532C14.2602 21.6015 14.6422 21.2055 14.6422 20.3165V16.5975C14.6422 15.8865 14.3692 15.4765 13.8222 15.3675V14.5605C13.8222 12.6735 12.6742 11.4295 10.9782 11.4295C9.2832 11.4295 8.1352 12.6735 8.1352 14.5605V15.3805C7.5882 15.5035 7.3282 15.8865 7.3282 16.5975V20.3165C7.3282 21.2055 7.7112 21.6015 8.5312 21.6015ZM9.9392 15.3395V14.5195C9.9392 13.6995 10.3362 13.2075 10.9782 13.2075C11.6352 13.2075 12.0172 13.6995 12.0172 14.5195V15.3395Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.62890625 31.41796875"
          className={className}
        >
          <path
            d="              M-0.0005 21.6011C-0.0005 23.7481 0.7925 25.3201 2.4065 26.3051C3.1995 26.7831 3.6915 27.3441 4.0055 28.1911L4.6895 30.0101C5.0315 30.9391 5.7695 31.4181 6.8085 31.4181H13.3435C14.3965 31.4181 15.1215 30.9391 15.4495 30.0101L16.1465 28.1911C16.4605 27.3441 16.9395 26.7831 17.7325 26.3051C19.3455 25.3201 20.1525 23.7621 20.1525 21.6011V14.8891C21.0275 14.8891 21.6285 14.2601 21.6285 13.3161V11.3891C21.6285 10.4591 21.0275 9.8301 20.1525 9.8301C20.1525 7.6701 19.3455 6.1111 17.7325 5.1271C16.9395 4.6481 16.4605 4.0881 16.1465 3.2261L15.4495 1.4221C15.1345 0.4921 14.3825 0.0001 13.3435 0.0001H6.8085C5.7695 0.0001 5.0315 0.4921 4.6895 1.4221L4.0055 3.2261C3.6775 4.1011 3.1855 4.6761 2.4065 5.1271C0.8065 6.0841 -0.0005 7.6561 -0.0005 9.8301ZM3.0485 20.9181V10.5001C3.0485 8.5861 4.1285 7.4511 6.0015 7.4511H14.1505C16.0095 7.4511 17.1035 8.5861 17.1035 10.5001V20.9181C17.1035 22.8321 16.0095 23.9671 14.1505 23.9671H6.0015C4.1285 23.9671 3.0485 22.8461 3.0485 20.9181ZM7.7245 20.4531H12.5235C13.2895 20.4531 13.6715 20.0431 13.6715 19.2231V15.5721C13.6715 14.9161 13.4125 14.5331 12.9195 14.3961V13.5351C12.9195 11.6621 11.7855 10.4041 10.1175 10.4041C8.4495 10.4041 7.3145 11.6621 7.3145 13.5351V14.4101C6.8225 14.5471 6.5765 14.9161 6.5765 15.5721V19.2231C6.5765 20.0431 6.9455 20.4531 7.7245 20.4531ZM8.9005 14.3551V13.4531C8.9005 12.5231 9.3655 11.9631 10.1175 11.9631C10.8695 11.9631 11.3335 12.5231 11.3335 13.4531V14.3551Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.599609375 32.5390625"
          className={className}
        >
          <path
            d="              M-0.0002 22.3536C-0.0002 24.5136 0.7928 26.0856 2.4198 27.1386C3.2538 27.6716 3.7598 28.2596 4.0878 29.0796L4.9218 31.0766C5.2908 32.0196 6.1108 32.5386 7.2048 32.5386H13.8628C14.9568 32.5386 15.7638 32.0336 16.1328 31.0766L16.9668 29.0796C17.2948 28.2596 17.8008 27.6716 18.6208 27.1386C20.2618 26.0856 21.0548 24.5276 21.0548 22.3536V15.5036C21.9708 15.4626 22.5998 14.7796 22.5998 13.7816V11.8126C22.5998 10.8416 21.9708 10.1446 21.0548 10.0896C21.0278 7.9706 20.2348 6.4396 18.6208 5.4006C17.8008 4.8676 17.2948 4.2926 16.9668 3.4586L16.1328 1.4626C15.7778 0.5196 14.9568 -0.0004 13.8628 -0.0004H7.2048C6.1108 -0.0004 5.2908 0.5196 4.9218 1.4626L4.0878 3.4586C3.7328 4.3206 3.2128 4.9216 2.4198 5.4006C0.7928 6.4526 -0.0002 8.0256 -0.0002 10.1996ZM3.6098 21.4646V11.0746C3.6098 9.2146 4.6488 8.1206 6.4398 8.1206H14.6148C16.4058 8.1206 17.4588 9.2146 17.4588 11.0746V21.4646C17.4588 23.3246 16.4058 24.4046 14.6148 24.4046H6.4398C4.6488 24.4046 3.6098 23.3376 3.6098 21.4646ZM8.1488 21.0546H13.0158C13.7948 21.0546 14.1778 20.6586 14.1778 19.7966V16.1196C14.1778 15.4216 13.9178 15.0256 13.3988 14.9026V14.0816C13.3988 12.1956 12.2498 10.9376 10.5818 10.9376C8.9008 10.9376 7.7518 12.1956 7.7518 14.0816V14.9156C7.2328 15.0386 6.9728 15.4216 6.9728 16.1196V19.7966C6.9728 20.6586 7.3558 21.0546 8.1488 21.0546ZM9.4468 14.8746V14.0136C9.4468 13.1386 9.8848 12.6196 10.5818 12.6196C11.2658 12.6196 11.7028 13.1386 11.7028 14.0136V14.8746Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.771484375 27.890625"
          className={className}
        >
          <path
            d="              M-0.0004 19.0587C-0.0004 21.1507 0.7796 22.6267 2.3106 23.4747C3.0076 23.8437 3.3766 24.2537 3.6366 25.0877L4.1426 26.7417C4.3746 27.5077 4.9216 27.8907 5.7146 27.8907H11.7856C12.6056 27.8907 13.1246 27.5217 13.3576 26.7417L13.8636 25.0877C14.1366 24.2537 14.4926 23.8437 15.1896 23.4747C16.7206 22.6267 17.4996 21.1507 17.4996 19.0587V13.0427H17.6916C18.3336 13.0427 18.7716 12.5917 18.7716 11.8807V9.9807C18.7716 9.2697 18.3336 8.8187 17.6916 8.8187H17.4996C17.4996 6.7267 16.7206 5.2637 15.1896 4.4157C14.4926 4.0327 14.1366 3.6367 13.8636 2.7887L13.3576 1.1347C13.1526 0.3827 12.6056 -0.0003 11.7856 -0.0003H5.7146C4.9216 -0.0003 4.3746 0.3687 4.1426 1.1347L3.6366 2.7887C3.3766 3.6227 3.0216 4.0467 2.3106 4.4157C0.7926 5.2367 -0.0004 6.7127 -0.0004 8.8317ZM1.5586 18.8397V9.0367C1.5586 6.7947 2.8716 5.4547 5.0856 5.4547H12.4276C14.6426 5.4547 15.9416 6.7947 15.9416 9.0367V18.8397C15.9416 21.0817 14.6426 22.4357 12.4276 22.4357H5.0856C2.8716 22.4357 1.5586 21.0817 1.5586 18.8397ZM6.4806 18.5257H11.1286C11.8536 18.5257 12.2086 18.1567 12.2086 17.3767V13.8087C12.2086 13.1797 11.9766 12.8237 11.4976 12.7007V11.7027C11.4976 9.9117 10.4046 8.6957 8.8046 8.6957C7.2056 8.6957 6.1116 9.9117 6.1116 11.7027V12.7147C5.6326 12.8237 5.4006 13.1797 5.4006 13.8087V17.3767C5.4006 18.1567 5.7556 18.5257 6.4806 18.5257ZM7.2736 12.6597V11.6207C7.2736 10.5277 7.8616 9.8297 8.8046 9.8297C9.7346 9.8297 10.3356 10.5277 10.3356 11.6207V12.6597Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.48046875 30.037109375"
          className={className}
        >
          <path
            d="              M-0.0001 20.6718C-0.0001 22.8048 0.8199 24.3628 2.3929 25.2658C3.1579 25.6898 3.6099 26.2228 3.9099 27.1118L4.4299 28.6968C4.7169 29.5998 5.3729 30.0368 6.3299 30.0368H12.7289C13.7129 30.0368 14.3419 29.5998 14.6289 28.6968L15.1619 27.1118C15.4629 26.2228 15.9139 25.6898 16.6659 25.2658C18.2379 24.3628 19.0719 22.8048 19.0719 20.6718V14.0958H19.1949C19.9609 14.0958 20.4809 13.5628 20.4809 12.7288V10.8558C20.4809 10.0218 19.9609 9.4878 19.1949 9.4878H19.0719V9.3648C19.0719 7.2328 18.2379 5.6738 16.6659 4.7718C15.9139 4.3478 15.4629 3.8148 15.1619 2.9258L14.6289 1.3398C14.3689 0.4508 13.6989 -0.0002 12.7289 -0.0002H6.3299C5.3729 -0.0002 4.7169 0.4378 4.4299 1.3398L3.9099 2.9258C3.6099 3.8148 3.1579 4.3618 2.3929 4.7718C0.8339 5.6328 -0.0001 7.2048 -0.0001 9.3648ZM2.3789 20.2478V9.7888C2.3789 7.7928 3.5269 6.6038 5.4689 6.6038H13.5899C15.5449 6.6038 16.6939 7.8068 16.6939 9.7888V20.2478C16.6939 22.2308 15.5449 23.4338 13.5899 23.4338H5.4689C3.5269 23.4338 2.3789 22.2438 2.3789 20.2478ZM7.2329 19.6878H11.9359C12.6879 19.6878 13.0569 19.2908 13.0569 18.4978V14.9028C13.0569 14.2738 12.8109 13.9038 12.3459 13.7678V12.8518C12.3459 10.9918 11.2249 9.7478 9.5839 9.7478C7.9299 9.7478 6.8089 10.9918 6.8089 12.8518V13.7808C6.3439 13.9178 6.0979 14.2738 6.0979 14.9028V18.4978C6.0979 19.2908 6.4809 19.6878 7.2329 19.6878ZM8.2439 13.7128V12.7558C8.2439 11.7578 8.7639 11.1428 9.5839 11.1428C10.3909 11.1428 10.9099 11.7578 10.9099 12.7558V13.7128Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.82421875 29.271484375"
          className={className}
        >
          <path
            d="              M-0.0005 20.166C-0.0005 22.285 0.8335 23.844 2.3785 24.691C3.1305 25.088 3.5685 25.594 3.8415 26.51L4.2795 27.973C4.5395 28.848 5.1545 29.271 6.0705 29.271H12.3865C13.3305 29.271 13.9045 28.861 14.1645 27.973L14.6155 26.51C14.8885 25.594 15.3265 25.088 16.0785 24.691C17.6235 23.844 18.4575 22.285 18.4575 20.166V13.672H18.6485C19.3595 13.672 19.8245 13.193 19.8245 12.414V10.568C19.8245 9.789 19.3595 9.311 18.6485 9.311H18.4575V9.105C18.4575 6.986 17.6235 5.441 16.0785 4.58C15.3265 4.184 14.8885 3.678 14.6155 2.775L14.1645 1.299C13.9315 0.437 13.3165 0 12.3865 0H6.0705C5.1545 0 4.5395 0.424 4.2795 1.299L3.8415 2.775C3.5825 3.664 3.1445 4.197 2.3785 4.58C0.8475 5.4 -0.0005 6.959 -0.0005 9.105ZM1.9965 19.879V9.406C1.9965 7.369 3.1855 6.139 5.1815 6.139H13.2755C15.2715 6.139 16.4605 7.369 16.4605 9.406V19.879C16.4605 21.902 15.2715 23.133 13.2755 23.133H5.1815C3.1855 23.133 1.9965 21.902 1.9965 19.879ZM6.9455 19.277H11.5935C12.3455 19.277 12.7145 18.881 12.7145 18.102V14.533C12.7145 13.932 12.4825 13.562 12.0315 13.412V12.482C12.0315 10.637 10.9105 9.379 9.2695 9.379C7.6285 9.379 6.5215 10.637 6.5215 12.482V13.426C6.0705 13.562 5.8375 13.932 5.8375 14.533V18.102C5.8375 18.881 6.2075 19.277 6.9455 19.277ZM7.8745 13.371V12.359C7.8745 11.348 8.4215 10.691 9.2695 10.691C10.1175 10.691 10.6645 11.348 10.6645 12.359V13.371Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.97265625 30.638671875"
          className={className}
        >
          <path
            d="              M0.0002 21.0816C0.0002 23.2146 0.8062 24.7736 2.3922 25.7166C3.1722 26.1676 3.6372 26.7016 3.9512 27.5766L4.5392 29.2716C4.8532 30.1736 5.5512 30.6386 6.5352 30.6386H12.9882C14.0002 30.6386 14.6702 30.1876 14.9842 29.2716L15.5862 27.5766C15.8872 26.7016 16.3512 26.1676 17.1312 25.7166C18.7172 24.7736 19.5372 23.2146 19.5372 21.0816V14.4376H19.6052C20.4262 14.4376 20.9722 13.8636 20.9722 12.9886V11.0876C20.9722 10.2126 20.4262 9.6386 19.6052 9.6386H19.5372V9.5566C19.5372 7.4236 18.7172 5.8656 17.1312 4.9216C16.3512 4.4706 15.8872 3.9376 15.5862 3.0626L14.9842 1.3676C14.6972 0.4786 14.0002 -0.0004 12.9882 -0.0004H6.5352C5.5512 -0.0004 4.8532 0.4646 4.5392 1.3676L3.9512 3.0626C3.6372 3.9376 3.1722 4.4976 2.3922 4.9216C0.8202 5.8376 0.0002 7.4106 0.0002 9.5566ZM2.6662 20.5356V10.1036C2.6662 8.1346 3.7872 6.9726 5.7012 6.9726H13.8362C15.7502 6.9726 16.8712 8.1346 16.8712 10.1036V20.5356C16.8712 22.4906 15.7502 23.6656 13.8362 23.6656H5.7012C3.7872 23.6656 2.6662 22.5036 2.6662 20.5356ZM7.4512 20.0156H12.1812C12.9472 20.0156 13.3162 19.6196 13.3162 18.8126V15.1896C13.3162 14.5466 13.0702 14.1776 12.5922 14.0406V13.1526C12.5922 11.2796 11.4712 10.0356 9.8162 10.0356C8.1482 10.0356 7.0272 11.2796 7.0272 13.1526V14.0546C6.5492 14.1776 6.3032 14.5466 6.3032 15.1896V18.8126C6.3032 19.6196 6.6722 20.0156 7.4512 20.0156ZM8.5312 13.9996V13.0566C8.5312 12.0996 9.0232 11.4976 9.8162 11.4976C10.5962 11.4976 11.1012 12.0996 11.1012 13.0566V13.9996Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.376953125 26.0859375"
          className={className}
        >
          <path
            d="              M-0.0001 17.5954C-0.0001 19.6874 0.7109 21.0414 2.2009 21.8884C2.8439 22.2304 3.1169 22.4904 3.3769 23.2424L3.9649 25.1424C4.1559 25.7574 4.6069 26.0864 5.2639 26.0864H10.9789C11.6489 26.0864 12.0999 25.7714 12.2769 25.1424L12.8789 23.2424C13.1249 22.4904 13.3989 22.2304 14.0269 21.8884C15.5309 21.0414 16.2419 19.6874 16.2419 17.5954V12.2364H16.4059C16.9809 12.2364 17.3769 11.8124 17.3769 11.1834V9.2424C17.3769 8.6134 16.9809 8.2034 16.4059 8.2034H16.2419C16.1739 6.2754 15.4629 5.0044 14.0269 4.1974C13.3989 3.8554 13.1249 3.5954 12.8789 2.8434L12.2769 0.9434C12.1129 0.3284 11.6489 0.0004 10.9789 0.0004H5.2639C4.6069 0.0004 4.1559 0.3284 3.9649 0.9434L3.3769 2.8434C3.1169 3.5954 2.8439 3.8554 2.2009 4.1974C0.7109 5.0314 -0.0001 6.3984 -0.0001 8.4904ZM0.9709 17.5134V8.5724C0.9709 6.0704 2.4609 4.5664 4.9629 4.5664H11.2929C13.7949 4.5664 15.2719 6.0704 15.2719 8.5724V17.5134C15.2719 20.0154 13.7949 21.5194 11.2929 21.5194H4.9629C2.4609 21.5194 0.9709 20.0154 0.9709 17.5134ZM5.8789 17.5544H10.4999C11.2109 17.5544 11.5529 17.1994 11.5529 16.4474V12.8654C11.5529 12.2224 11.3069 11.8674 10.7869 11.7854V10.6774C10.7869 8.9684 9.7339 7.8204 8.1899 7.8204C6.6449 7.8204 5.5779 8.9684 5.5779 10.6774V11.7854C5.0589 11.8674 4.8129 12.2224 4.8129 12.8654V16.4474C4.8129 17.1994 5.1539 17.5544 5.8789 17.5544ZM6.4809 11.7574V10.6504C6.4809 9.4614 7.1369 8.7094 8.1899 8.7094C9.2289 8.7094 9.8989 9.4614 9.8989 10.6504V11.7574Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16.65234375 25.15625"
          className={className}
        >
          <path
            d="              M-0.0004 16.8435C-0.0004 18.9215 0.6696 20.2345 2.1606 21.0685C2.7616 21.3965 2.9806 21.5875 3.2266 22.2985L3.8556 24.3085C4.0336 24.8695 4.4566 25.1565 5.0176 25.1565H10.5686C11.1566 25.1565 11.5796 24.8695 11.7306 24.3085L12.3866 22.2985C12.6056 21.5875 12.8246 21.3965 13.4396 21.0685C14.9156 20.2345 15.5996 18.9215 15.5996 16.8435V11.8125H15.7496C16.2966 11.8125 16.6526 11.4155 16.6526 10.8285V8.8455C16.6526 8.2855 16.2966 7.8745 15.7496 7.8745H15.5856C15.4906 6.0565 14.8206 4.8675 13.4396 4.0875C12.8246 3.7595 12.6056 3.5815 12.3866 2.8715L11.7306 0.8475C11.5796 0.3005 11.1566 -0.0005 10.5686 -0.0005H5.0176C4.4566 -0.0005 4.0336 0.3005 3.8556 0.8475L3.2266 2.8715C2.9806 3.5815 2.7616 3.7595 2.1606 4.0875C0.6696 4.9355 -0.0004 6.2345 -0.0004 8.3125ZM0.6696 16.8165V8.3395C0.6696 5.6875 2.2426 4.1155 4.8946 4.1155H10.7186C13.3576 4.1155 14.9296 5.6875 14.9296 8.3395V16.8165C14.9296 19.4685 13.3576 21.0405 10.7186 21.0405H4.8946C2.2426 21.0405 0.6696 19.4685 0.6696 16.8165ZM5.5646 17.0625H10.1716C10.8826 17.0625 11.2106 16.7065 11.2106 15.9555V12.3865C11.2106 11.7305 10.9646 11.3745 10.4176 11.3065V10.1445C10.4176 8.4905 9.3786 7.3555 7.8616 7.3555C6.3436 7.3555 5.3046 8.4905 5.3046 10.1445V11.3065C4.7716 11.3745 4.5256 11.7305 4.5256 12.3865V15.9555C4.5256 16.7065 4.8396 17.0625 5.5646 17.0625ZM6.0706 11.2795V10.1445C6.0706 8.9145 6.7676 8.1345 7.8616 8.1345C8.9686 8.1345 9.6656 8.9145 9.6656 10.1445V11.2795Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}