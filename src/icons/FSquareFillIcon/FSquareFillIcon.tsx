import { IconProps } from "../../types"

export default function FSquareFillIconIcon({
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
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM10.9097 20.2753C9.3657 20.2753 8.4907 19.2912 8.4907 17.5953V9.8852C8.4907 8.0663 9.4197 7.1232 11.2387 7.1232H16.8027C18.0747 7.1232 18.8267 7.7793 18.8267 8.9003C18.8267 10.0493 18.0747 10.6913 16.8027 10.6913H13.3027V12.2913H16.8027C17.8277 12.2913 18.4437 12.8793 18.4437 13.8633C18.4437 14.8343 17.8277 15.4353 16.8027 15.4353H13.3437V17.5953C13.3437 19.2773 12.4417 20.2753 10.9097 20.2753Z"
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
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM10.1997 19.6597C9.0647 19.6597 8.4217 18.9077 8.4217 17.6777V8.5997C8.4217 7.3007 9.0777 6.5627 10.3497 6.5627H16.5297C17.4457 6.5627 18.0057 7.0687 18.0057 7.9297C18.0057 8.7777 17.4457 9.2827 16.5297 9.2827H11.9627V11.9627H16.2557C17.0487 11.9627 17.5407 12.4137 17.5407 13.1937C17.5407 13.9727 17.0487 14.4237 16.2557 14.4237H11.9907V17.6777C11.9907 18.9077 11.3337 19.6597 10.1997 19.6597Z"
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
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM10.5817 19.9885C9.2287 19.9885 8.4627 19.1135 8.4627 17.6505V9.2835C8.4627 7.7105 9.2557 6.8635 10.8147 6.8635H16.6657C17.7737 6.8635 18.4437 7.4515 18.4437 8.4495C18.4437 9.4605 17.7737 10.0355 16.6657 10.0355H12.6737V12.1405H16.5427C17.4587 12.1405 18.0197 12.6735 18.0197 13.5625C18.0197 14.4375 17.4587 14.9575 16.5427 14.9575H12.7017V17.6505C12.7017 19.1135 11.9217 19.9885 10.5817 19.9885Z"
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
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM9.2967 18.7035C8.7497 18.7035 8.4357 18.3065 8.4357 17.7325V6.9725C8.4357 6.3845 8.7367 5.9885 9.2837 5.9885H15.9827C16.4337 5.9885 16.7207 6.2615 16.7207 6.7265C16.7207 7.1505 16.4337 7.4515 15.9827 7.4515H10.1857V11.6215H15.4627C15.9007 11.6215 16.2017 11.8805 16.2017 12.3325C16.2017 12.7695 15.9007 13.0155 15.4627 13.0155H10.1857V17.7325C10.1857 18.3205 9.8707 18.7035 9.2967 18.7035Z"
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
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM9.7477 19.2503C8.8727 19.2503 8.3947 18.6483 8.3947 17.7183V7.7653C8.3947 6.8083 8.8727 6.2073 9.7887 6.2073H16.3517C17.0347 6.2073 17.4867 6.6033 17.4867 7.2873C17.4867 7.9573 17.0347 8.3673 16.3517 8.3673H11.1157V11.7443H15.9137C16.5427 11.7443 16.9667 12.1133 16.9667 12.7693C16.9667 13.4123 16.5427 13.7673 15.9137 13.7673H11.1157V17.7183C11.1157 18.6623 10.6227 19.2503 9.7477 19.2503Z"
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
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM9.4887 19.0315C8.7497 19.0315 8.3677 18.4975 8.3677 17.7465V7.2875C8.3677 6.5215 8.7497 6.0015 9.4747 6.0015H16.2557C16.8027 6.0015 17.1997 6.3435 17.1997 6.9315C17.1997 7.4925 16.8027 7.8615 16.2557 7.8615H10.6367V11.6215H15.7087C16.2557 11.6215 16.6527 11.9495 16.6527 12.5235C16.6527 13.0975 16.2557 13.3845 15.7087 13.3845H10.6367V17.7465C10.6367 18.5255 10.2267 19.0315 9.4887 19.0315Z"
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
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM9.9397 19.428C8.9547 19.428 8.4087 18.758 8.4087 17.705V8.121C8.4087 7.027 8.9687 6.357 10.0347 6.357H16.4337C17.2127 6.357 17.7187 6.809 17.7187 7.574C17.7187 8.312 17.2127 8.764 16.4337 8.764H11.4847V11.84H16.0647C16.7617 11.84 17.2267 12.25 17.2267 12.961C17.2267 13.658 16.7617 14.041 16.0647 14.041H11.4977V17.705C11.4977 18.771 10.9377 19.428 9.9397 19.428Z"
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
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM9.0507 18.2654C8.7367 18.2654 8.5317 18.0334 8.5317 17.7054V6.5354C8.5317 6.1794 8.7087 5.9474 9.0237 5.9474H15.6267C15.9417 5.9474 16.1057 6.1524 16.1057 6.4254C16.1057 6.6724 15.9417 6.8904 15.6267 6.8904H9.5837V11.5934H15.1347C15.4357 11.5934 15.5997 11.7854 15.5997 12.0584C15.5997 12.3184 15.4357 12.5234 15.1347 12.5234H9.5837V17.7054C9.5837 18.0334 9.3927 18.2654 9.0507 18.2654Z"
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
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM8.9277 18.033C8.7227 18.033 8.5727 17.883 8.5727 17.691V6.316C8.5727 6.084 8.6957 5.934 8.8867 5.934H15.4497C15.6957 5.934 15.7907 6.084 15.7907 6.262C15.7907 6.439 15.6957 6.604 15.4497 6.604H9.2837V11.58H14.9567C15.2027 11.58 15.2987 11.73 15.2987 11.922C15.2987 12.086 15.2027 12.264 14.9567 12.264H9.2837V17.691C9.2837 17.883 9.1467 18.033 8.9277 18.033Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}