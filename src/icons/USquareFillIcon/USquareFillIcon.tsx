import { IconProps } from "../../types"

export default function USquareFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.111328125 27.111328125"
          className={className}
        >
          <path
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM13.7267 20.2893C10.1177 20.2893 7.6157 18.3343 7.6157 15.4633V9.3923C7.6157 7.7383 8.4627 6.8363 9.9937 6.8363C11.4977 6.8363 12.3597 7.7523 12.3597 9.3923V15.0113C12.3597 15.8323 12.9197 16.4473 13.7267 16.4473C14.5197 16.4473 15.0937 15.8323 15.0937 15.0113V9.3923C15.0937 7.7523 15.9417 6.8363 17.4587 6.8363C18.9767 6.8363 19.8377 7.7383 19.8377 9.3923V15.4633C19.8377 18.3343 17.3227 20.2893 13.7267 20.2893Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.140625 26.140625"
          className={className}
        >
          <path
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM13.1527 19.7417C9.7067 19.7417 7.3417 17.8147 7.3417 14.9027V8.2577C7.3417 7.0277 7.9707 6.3437 9.0917 6.3437C10.2127 6.3437 10.8417 7.0407 10.8417 8.2577V14.5607C10.8417 15.9547 11.7717 16.8847 13.1527 16.8847C14.5467 16.8847 15.4767 15.9547 15.4767 14.5607V8.2577C15.4767 7.0407 16.1057 6.3437 17.2127 6.3437C18.3477 6.3437 18.9767 7.0277 18.9767 8.2577V14.9027C18.9767 17.8147 16.6117 19.7417 13.1527 19.7417Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.66015625 26.66015625"
          className={className}
        >
          <path
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM13.4527 20.0295C9.9257 20.0295 7.4787 18.0875 7.4787 15.2035V8.8595C7.4787 7.4105 8.2307 6.6035 9.5707 6.6035C10.8967 6.6035 11.6487 7.4235 11.6487 8.8595V14.8065C11.6487 15.9005 12.3727 16.6525 13.4527 16.6525C14.5337 16.6525 15.2717 15.9005 15.2717 14.8065V8.8595C15.2717 7.4235 16.0237 6.6035 17.3357 6.6035C18.6757 6.6035 19.4277 7.4105 19.4277 8.8595V15.2035C19.4277 18.0875 16.9937 20.0295 13.4527 20.0295Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.759765625 24.759765625"
          className={className}
        >
          <path
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM12.3867 18.8395C9.3107 18.8395 7.1917 17.0215 7.1917 14.1915V6.8085C7.1917 6.2075 7.5197 5.8515 8.0527 5.8515C8.6137 5.8515 8.9277 6.2075 8.9277 6.8085V14.0415C8.9277 16.0645 10.3497 17.3635 12.3867 17.3635C14.4237 17.3635 15.8317 16.0645 15.8317 14.0415V6.8085C15.8317 6.2075 16.1597 5.8515 16.6937 5.8515C17.2537 5.8515 17.5817 6.2075 17.5817 6.8085V14.1915C17.5817 17.0215 15.4497 18.8395 12.3867 18.8395Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.525390625 25.525390625"
          className={className}
        >
          <path
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM12.7967 19.3863C9.4337 19.3863 7.1637 17.4723 7.1637 14.5193V7.5193C7.1637 6.5763 7.6567 6.0293 8.5037 6.0293C9.3787 6.0293 9.8707 6.5763 9.8707 7.5193V14.2593C9.8707 16.0373 11.0337 17.1583 12.7967 17.1583C14.5607 17.1583 15.7087 16.0373 15.7087 14.2593V7.5193C15.7087 6.5763 16.2147 6.0293 17.0627 6.0293C17.9377 6.0293 18.4297 6.5763 18.4297 7.5193V14.5193C18.4297 17.4723 16.1597 19.3863 12.7967 19.3863Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.169921875 25.169921875"
          className={className}
        >
          <path
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM12.5917 19.1815C9.2837 19.1815 7.0687 17.2815 7.0687 14.3145V7.1095C7.0687 6.3165 7.4787 5.8375 8.1897 5.8375C8.9137 5.8375 9.3247 6.3165 9.3247 7.1095V14.0955C9.3247 16.0785 10.6227 17.3085 12.5917 17.3085C14.5607 17.3085 15.8457 16.0785 15.8457 14.0955V7.1095C15.8457 6.3165 16.2697 5.8375 16.9667 5.8375C17.7047 5.8375 18.1157 6.3165 18.1157 7.1095V14.3145C18.1157 17.2815 15.9007 19.1815 12.5917 19.1815Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.78515625 25.78515625"
          className={className}
        >
          <path
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM12.9477 19.537C9.5427 19.537 7.2327 17.609 7.2327 14.684V7.848C7.2327 6.768 7.7927 6.166 8.7637 6.166C9.7347 6.166 10.2947 6.781 10.2947 7.848V14.396C10.2947 15.996 11.3477 17.035 12.9477 17.035C14.5467 17.035 15.6137 15.996 15.6137 14.396V7.848C15.6137 6.781 16.1597 6.166 17.1177 6.166C18.1157 6.166 18.6617 6.768 18.6617 7.848V14.684C18.6617 17.609 16.3517 19.537 12.9477 19.537Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.19921875 24.19921875"
          className={className}
        >
          <path
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM12.0997 18.3754C9.3517 18.3754 7.3417 16.6794 7.3417 14.0004V6.3984C7.3417 6.0564 7.5607 5.8514 7.8747 5.8514C8.2027 5.8514 8.4087 6.0564 8.4087 6.3984V13.9454C8.4087 16.0374 9.9807 17.4184 12.0997 17.4184C14.2327 17.4184 15.8047 16.0374 15.8047 13.9454V6.3984C15.8047 6.0564 16.0237 5.8514 16.3377 5.8514C16.6657 5.8514 16.8707 6.0564 16.8707 6.3984V14.0004C16.8707 16.6794 14.8617 18.3754 12.0997 18.3754Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.92578125 23.912109375"
          className={className}
        >
          <path
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM11.9627 18.129C9.3787 18.129 7.4237 16.502 7.4237 13.891V6.193C7.4237 5.975 7.5747 5.838 7.7797 5.838C7.9977 5.838 8.1347 5.975 8.1347 6.193V13.904C8.1347 16.01 9.7887 17.445 11.9627 17.445C14.1367 17.445 15.7907 16.01 15.7907 13.904V6.193C15.7907 5.975 15.9417 5.838 16.1467 5.838C16.3657 5.838 16.5017 5.975 16.5017 6.193V13.891C16.5017 16.502 14.5467 18.129 11.9627 18.129Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}