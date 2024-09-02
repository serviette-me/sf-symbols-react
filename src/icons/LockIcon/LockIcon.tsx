import { IconProps } from "../../types"

export default function LockIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.2734375 29.134765625"
          className={className}
        >
          <path
            d="              M3.5679 29.1351H17.7049C20.0839 29.1351 21.2739 27.9321 21.2739 25.3201V14.4371C21.2739 12.0861 20.2889 10.8831 18.2929 10.6911V7.7241C18.2929 3.1171 15.0669 0.0001 10.6369 0.0001C6.2069 0.0001 2.9939 3.1171 2.9939 7.7241V10.6911C0.9849 10.8831 -0.0001 12.0721 -0.0001 14.4371V25.3201C-0.0001 27.9321 1.1759 29.1351 3.5679 29.1351ZM7.3149 7.6831C7.3149 5.6051 8.6949 4.1971 10.6369 4.1971C12.5509 4.1971 13.9729 5.6051 13.9729 7.6831V10.6641H7.3149ZM5.4139 24.9241C4.9359 24.9241 4.6899 24.6781 4.6899 24.1441V15.6411C4.6899 15.0941 4.9359 14.8751 5.4139 14.8751H15.8729C16.3519 14.8751 16.5699 15.0941 16.5699 15.6411V24.1441C16.5699 24.6781 16.3519 24.9241 15.8729 24.9241Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.9609375 27.97265625"
          className={className}
        >
          <path
            d="              M3.3219 27.9729H16.6519C18.8399 27.9729 19.9609 26.8379 19.9609 24.4449V14.2869C19.9609 12.1679 19.0589 11.0329 17.2809 10.8279V7.6839C17.2809 2.8029 13.9859 -0.0001 9.9809 -0.0001C5.9749 -0.0001 2.6929 2.8029 2.6929 7.6839V10.8279C0.9159 11.0329 -0.0001 12.1679 -0.0001 14.2869V24.4449C-0.0001 26.8379 1.1209 27.9729 3.3219 27.9729ZM5.9469 7.5199C5.9469 4.7579 7.7379 3.1449 9.9809 3.1449C12.2229 3.1449 14.0409 4.7579 14.0409 7.5199V10.7869H5.9469ZM4.2789 24.8419C3.7459 24.8419 3.4449 24.5409 3.4449 23.9259V14.8199C3.4449 14.2189 3.7459 13.9179 4.2789 13.9179H15.6949C16.2289 13.9179 16.5159 14.2189 16.5159 14.8199V23.9259C16.5159 24.5409 16.2289 24.8419 15.6949 24.8419Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.64453125 28.587890625"
          className={className}
        >
          <path
            d="              M3.4449 28.5877H17.1989C19.4959 28.5877 20.6449 27.4117 20.6449 24.9097V14.3687C20.6449 12.1267 19.7009 10.9507 17.8149 10.7597V7.6977C17.8149 2.9667 14.5609 -0.0003 10.3219 -0.0003C6.0979 -0.0003 2.8579 2.9667 2.8579 7.6977V10.7597C0.9569 10.9507 -0.0001 12.1137 -0.0001 14.3687V24.9097C-0.0001 27.4117 1.1489 28.5877 3.4449 28.5877ZM6.6719 7.6017C6.6719 5.1957 8.2439 3.6917 10.3219 3.6917C12.4009 3.6917 13.9999 5.1957 13.9999 7.6017V10.7187H6.6719ZM4.8809 24.8827C4.3749 24.8827 4.1019 24.6097 4.1019 24.0347V15.2577C4.1019 14.6837 4.3749 14.4237 4.8809 14.4237H15.7909C16.2969 14.4237 16.5429 14.6837 16.5429 15.2577V24.0347C16.5429 24.6097 16.2969 24.8827 15.7909 24.8827Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.552734375 26.5234375"
          className={className}
        >
          <path
            d="              M2.8989 26.5233H15.6539C17.4859 26.5233 18.5529 25.4293 18.5529 23.4613V13.6993C18.5529 11.9083 17.6639 10.8423 16.1189 10.6643V7.4513C16.1189 2.6383 12.9879 0.0003 9.2829 0.0003C5.5649 0.0003 2.4469 2.6383 2.4469 7.4513V10.6643C0.8889 10.8283 -0.0001 11.9083 -0.0001 13.6993V23.4613C-0.0001 25.4293 1.0669 26.5233 2.8989 26.5233ZM4.1289 7.2733C4.1289 3.7053 6.3849 1.5993 9.2829 1.5993C12.1679 1.5993 14.4379 3.7053 14.4379 7.2733V10.6363H4.1289ZM2.9259 24.9243C2.1879 24.9243 1.7089 24.4043 1.7089 23.5703V13.5903C1.7089 12.7563 2.1879 12.2363 2.9259 12.2363H15.6409C16.3789 12.2363 16.8439 12.7563 16.8439 13.5903V23.5703C16.8439 24.4043 16.3789 24.9243 15.6409 24.9243Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.126953125 27.234375"
          className={className}
        >
          <path
            d="              M3.1579 27.2348H15.9689C18.0469 27.2348 19.1269 26.1268 19.1269 23.8848V14.2048C19.1269 12.2228 18.2789 11.1288 16.6389 10.9098V7.6558C16.6389 2.6118 13.3029 -0.0003 9.5699 -0.0003C5.8379 -0.0003 2.5019 2.6118 2.5019 7.6558V10.9098C0.8609 11.1288 -0.0001 12.2228 -0.0001 14.2048V23.8848C-0.0001 26.1268 1.0799 27.2348 3.1579 27.2348ZM5.0589 7.4097C5.0589 4.2108 7.1229 2.4608 9.5699 2.4608C12.0039 2.4608 14.0819 4.2108 14.0819 7.4097V10.8688H5.0589ZM3.5549 24.7868C2.9939 24.7868 2.6519 24.4458 2.6519 23.7888V14.3008C2.6519 13.6448 2.9939 13.3168 3.5549 13.3168H15.5859C16.1599 13.3168 16.4749 13.6448 16.4749 14.3008V23.7888C16.4749 24.4458 16.1599 24.7868 15.5859 24.7868Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.662109375 26.810546875"
          className={className}
        >
          <path
            d="              M3.0759 26.811H15.5859C17.5959 26.811 18.6619 25.717 18.6619 23.557V14.137C18.6619 12.25 17.8419 11.17 16.2699 10.937V7.629C16.2699 2.488 12.9059 0 9.3239 0C5.7559 0 2.3929 2.488 2.3929 7.629V10.937C0.8339 11.17 -0.0001 12.236 -0.0001 14.137V23.557C-0.0001 25.717 1.0669 26.811 3.0759 26.811ZM4.5669 7.342C4.5669 3.883 6.7679 2.064 9.3239 2.064C11.8809 2.064 14.1099 3.883 14.1099 7.342V10.896H4.5669ZM3.1449 24.746C2.5569 24.746 2.2149 24.377 2.2149 23.707V13.986C2.2149 13.316 2.5569 12.961 3.1449 12.961H15.5179C16.1189 12.961 16.4469 13.316 16.4469 13.986V23.707C16.4469 24.377 16.1189 24.746 15.5179 24.746Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.482421875 27.548828125"
          className={className}
        >
          <path
            d="              M3.2269 27.5491H16.2559C18.3889 27.5491 19.4829 26.4281 19.4829 24.1171V14.2321C19.4829 12.1951 18.6079 11.0741 16.9119 10.8691V7.6561C16.9119 2.6801 13.5899 0.0001 9.7479 0.0001C5.8929 0.0001 2.5839 2.6801 2.5839 7.6561V10.8551C0.8749 11.0741 -0.0001 12.1811 -0.0001 14.2321V24.1171C-0.0001 26.4281 1.0939 27.5491 3.2269 27.5491ZM5.4419 7.4511C5.4419 4.4301 7.3829 2.7481 9.7479 2.7481C12.0999 2.7481 14.0679 4.4301 14.0679 7.4511V10.8281H5.4419ZM3.8689 24.8011C3.3219 24.8011 2.9939 24.4731 2.9939 23.8441V14.5191C2.9939 13.8771 3.3219 13.5621 3.8689 13.5621H15.6269C16.1879 13.5621 16.4879 13.8771 16.4879 14.5191V23.8441C16.4879 24.4731 16.1879 24.8011 15.6269 24.8011Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.416015625 26.154296875"
          className={className}
        >
          <path
            d="              M2.6659 26.1539H15.7499C17.3629 26.1539 18.4159 25.0329 18.4159 23.3239V13.1109C18.4159 11.4569 17.4319 10.3629 15.9139 10.2949V7.2049C15.9139 2.8299 13.0979 -0.0001 9.2149 -0.0001C5.3319 -0.0001 2.5159 2.8299 2.5159 7.2049V10.2949C0.9979 10.3629 -0.0001 11.4569 -0.0001 13.1109V23.3239C-0.0001 25.0329 1.0669 26.1539 2.6659 26.1539ZM3.5549 7.1779C3.5549 3.4589 5.8789 0.9839 9.2149 0.9839C12.5369 0.9839 14.8749 3.4589 14.8749 7.1779V10.2809H3.5549ZM2.6389 25.1559C1.6949 25.1559 1.0389 24.4319 1.0389 23.3789V13.0429C1.0389 11.9899 1.6949 11.2789 2.6389 11.2789H15.7909C16.7349 11.2789 17.3769 11.9899 17.3769 13.0429V23.3789C17.3769 24.4319 16.7349 25.1559 15.7909 25.1559Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.34765625 25.94921875"
          className={className}
        >
          <path
            d="              M2.5569 25.9492H15.7909C17.2949 25.9492 18.3479 24.8422 18.3479 23.2562V12.8102C18.3479 11.2242 17.2949 10.1172 15.8049 10.1172V7.0822C15.8049 2.9262 13.1389 0.0002 9.1739 0.0002C5.2089 0.0002 2.5569 2.9262 2.5569 7.0822V10.1172C1.0669 10.1172 -0.0001 11.2242 -0.0001 12.8102V23.2562C-0.0001 24.8422 1.0669 25.9492 2.5569 25.9492ZM3.2539 7.1372C3.2539 3.3222 5.6189 0.6702 9.1739 0.6702C12.7149 0.6702 15.0939 3.3222 15.0939 7.1372V10.1172H3.2539ZM2.4879 25.2792C1.4489 25.2792 0.7109 24.4592 0.7109 23.2972V12.7692C0.7109 11.6072 1.4489 10.7872 2.4879 10.7872H15.8729C16.9119 10.7872 17.6509 11.6072 17.6509 12.7692V23.2972C17.6509 24.4592 16.9119 25.2792 15.8729 25.2792Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
