import { IconProps } from "../../types"

export default function CartIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.703125 28.779296875"
          className={className}
        >
          <path
            d="              M11.4019 21.0825H27.1389C28.2599 21.0825 29.2849 20.3165 29.2849 19.0445C29.2849 17.7875 28.2599 17.0485 27.1389 17.0485H12.0309C11.8809 17.0485 11.7849 16.9125 11.7719 16.7615L11.5799 15.4355H27.5759C30.0779 15.4355 31.5139 13.9865 31.8689 11.4025L32.6209 6.1525C32.6489 5.9335 32.7029 5.6605 32.7029 5.3735C32.7029 4.0335 31.8689 3.0485 30.1189 3.0485H9.8709L9.8159 2.6115C9.5699 0.8755 8.6539 0.0005 6.5899 0.0005H2.4059C1.1209 0.0005 -0.0001 1.0935 -0.0001 2.4195C-0.0001 3.7325 1.1209 4.8395 2.4059 4.8395H5.2909L7.0959 17.0625C7.4649 19.6055 8.8729 21.0825 11.4019 21.0825ZM27.7129 7.0955L27.2619 11.1565C27.2339 11.3205 27.1659 11.3885 27.0159 11.3885H11.0199L10.4319 7.0955ZM12.6739 28.7795C14.3829 28.7795 15.7359 27.4125 15.7359 25.7035C15.7359 24.0215 14.3829 22.6405 12.6739 22.6405C10.9919 22.6405 9.5979 24.0215 9.5979 25.7035C9.5979 27.4125 10.9919 28.7795 12.6739 28.7795ZM24.6779 28.7795C26.3729 28.7795 27.7399 27.4125 27.7399 25.7035C27.7399 24.0215 26.3729 22.6405 24.6779 22.6405C22.9959 22.6405 21.6149 24.0215 21.6149 25.7035C21.6149 27.4125 22.9959 28.7795 24.6779 28.7795Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.12890625 27.8359375"
          className={className}
        >
          <path
            d="              M11.2659 20.6587H27.0979C27.9319 20.6587 28.6699 20.0567 28.6699 19.1267C28.6699 18.2107 27.9319 17.6097 27.0979 17.6097H11.6899C11.2249 17.6097 10.9379 17.2817 10.8689 16.7887L10.6639 15.4087H27.3439C29.5859 15.4087 30.8159 14.0687 31.1449 11.7987L32.0609 5.5507C32.0879 5.3597 32.1289 5.0997 32.1289 4.9087C32.1289 3.8967 31.4589 3.1857 30.2149 3.1857H8.9279L8.7769 2.1057C8.5719 0.7107 7.9299 -0.0003 6.2069 -0.0003H1.7089C0.7929 -0.0003 -0.0001 0.7797 -0.0001 1.7227C-0.0001 2.6657 0.7929 3.4457 1.7089 3.4457H5.4549L7.4509 17.0767C7.7929 19.3047 9.0099 20.6587 11.2659 20.6587ZM28.4789 6.2347L27.7679 11.5527C27.6859 12.0447 27.4399 12.3597 26.9609 12.3597H10.2399L9.3649 6.2347ZM12.4279 27.8357C13.9039 27.8357 15.0799 26.6607 15.0799 25.1837C15.0799 23.7207 13.9039 22.5447 12.4279 22.5447C10.9789 22.5447 9.7889 23.7207 9.7889 25.1837C9.7889 26.6607 10.9789 27.8357 12.4279 27.8357ZM24.8279 27.8357C26.2909 27.8357 27.4669 26.6607 27.4669 25.1837C27.4669 23.7207 26.2909 22.5447 24.8279 22.5447C23.3649 22.5447 22.1759 23.7207 22.1759 25.1837C22.1759 26.6607 23.3649 27.8357 24.8279 27.8357Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.4296875 28.328125"
          className={className}
        >
          <path
            d="              M11.3339 20.8907H27.1249C28.0959 20.8907 28.9979 20.2067 28.9979 19.0857C28.9979 17.9917 28.0959 17.3087 27.1249 17.3087H11.8669C11.5659 17.3087 11.3889 17.0897 11.3479 16.7757L11.1559 15.4217H27.4669C29.8459 15.4217 31.1859 14.0277 31.5269 11.5937L32.3479 5.8787C32.3889 5.6597 32.4299 5.4007 32.4299 5.1547C32.4299 3.9787 31.6779 3.1167 30.1599 3.1167H9.4199L9.3239 2.3787C9.1059 0.8067 8.3129 -0.0003 6.3989 -0.0003H2.0779C0.9709 -0.0003 -0.0001 0.9567 -0.0001 2.0917C-0.0001 3.2267 0.9709 4.1837 2.0779 4.1837H5.3729L7.2599 17.0627C7.6149 19.4687 8.9409 20.8907 11.3339 20.8907ZM28.0679 6.6987L27.4939 11.3477C27.4529 11.6617 27.2889 11.8537 26.9879 11.8537H10.6499L9.9259 6.6987ZM12.5649 28.3277C14.1499 28.3277 15.4219 27.0567 15.4219 25.4707C15.4219 23.8847 14.1499 22.5997 12.5649 22.5997C10.9919 22.5997 9.6929 23.8847 9.6929 25.4707C9.6929 27.0567 10.9919 28.3277 12.5649 28.3277ZM24.7459 28.3277C26.3319 28.3277 27.6039 27.0567 27.6039 25.4707C27.6039 23.8847 26.3319 22.5997 24.7459 22.5997C23.1739 22.5997 21.8749 23.8847 21.8749 25.4707C21.8749 27.0567 23.1739 28.3277 24.7459 28.3277Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.158203125 26.564453125"
          className={className}
        >
          <path
            d="              M10.8969 19.9885H27.0839C27.4809 19.9885 27.8499 19.6465 27.8499 19.1955C27.8499 18.7445 27.4809 18.4025 27.0839 18.4025H11.1289C10.2679 18.4025 9.7339 17.8555 9.5979 16.9255L9.3379 15.1485H26.9749C28.8199 15.1485 29.7089 14.0545 29.9819 12.2635L31.1039 4.8265C31.1309 4.6755 31.1579 4.4435 31.1579 4.3475C31.1579 3.7595 30.7479 3.3765 30.0919 3.3765H7.5739L7.2599 1.2165C7.1369 0.4105 6.8499 0.0005 5.7559 0.0005H0.7789C0.3559 0.0005 -0.0001 0.3555 -0.0001 0.7935C-0.0001 1.2165 0.3559 1.5855 0.7789 1.5855H5.6599L7.9569 17.1715C8.2029 18.9085 9.1189 19.9885 10.8969 19.9885ZM29.3949 4.9625L28.3279 12.0855C28.1779 13.0155 27.7269 13.5625 26.8649 13.5625H9.0919L7.8199 4.9625ZM12.3049 26.5645C13.4939 26.5645 14.4379 25.6215 14.4379 24.4315C14.4379 23.2425 13.4939 22.2985 12.3049 22.2985C11.1149 22.2985 10.1719 23.2425 10.1719 24.4315C10.1719 25.6215 11.1149 26.5645 12.3049 26.5645ZM24.8689 26.5645C26.0589 26.5645 27.0019 25.6215 27.0019 24.4315C27.0019 23.2425 26.0589 22.2985 24.8689 22.2985C23.6799 22.2985 22.7229 23.2425 22.7229 24.4315C22.7229 25.6215 23.6799 26.5645 24.8689 26.5645Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.759765625 27.220703125"
          className={className}
        >
          <path
            d="              M11.1699 20.3846H27.0839C27.7269 20.3846 28.2869 19.8926 28.2869 19.1816C28.2869 18.4706 27.7269 17.9786 27.0839 17.9786H11.4709C10.8009 17.9786 10.3909 17.4996 10.2949 16.8026L10.0899 15.3806H27.1929C29.2719 15.3806 30.3649 14.1096 30.6799 12.0446L31.7049 5.1676C31.7319 4.9766 31.7599 4.7446 31.7599 4.6076C31.7599 3.8146 31.1989 3.2816 30.2699 3.2816H8.3259L8.1069 1.7776C7.9429 0.6016 7.4789 -0.0004 5.9609 -0.0004H1.2579C0.5879 -0.0004 -0.0001 0.5876 -0.0001 1.2856C-0.0001 1.9686 0.5879 2.5566 1.2579 2.5566H5.5649L7.6969 17.0766C7.9979 19.1266 9.0919 20.3846 11.1699 20.3846ZM28.9569 5.6876L28.0819 11.7986C27.9859 12.5096 27.6039 12.9746 26.9199 12.9746H9.7339L8.6819 5.6876ZM12.2769 27.2206C13.6039 27.2206 14.6429 26.1676 14.6429 24.8556C14.6429 23.5296 13.6039 22.4766 12.2769 22.4766C10.9649 22.4766 9.9119 23.5296 9.9119 24.8556C9.9119 26.1676 10.9649 27.2206 12.2769 27.2206ZM24.9239 27.2206C26.2499 27.2206 27.3029 26.1676 27.3029 24.8556C27.3029 23.5296 26.2499 22.4766 24.9239 22.4766C23.6109 22.4766 22.5449 23.5296 22.5449 24.8556C22.5449 26.1676 23.6109 27.2206 24.9239 27.2206Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.5546875 26.87890625"
          className={className}
        >
          <path
            d="              M11.1149 20.2348H27.0699C27.6039 20.2348 28.0679 19.7968 28.0679 19.2088C28.0679 18.6208 27.6039 18.1838 27.0699 18.1838H11.3479C10.5679 18.1838 10.0899 17.6368 9.9669 16.8028L9.7479 15.3668H27.0979C29.0939 15.3668 30.1189 14.1368 30.4059 12.1818L31.4999 4.9488C31.5269 4.7718 31.5549 4.5528 31.5549 4.4298C31.5549 3.7738 31.0629 3.3218 30.3109 3.3218H7.9839L7.7249 1.5858C7.5879 0.5328 7.2049 -0.0002 5.8109 -0.0002H1.0119C0.4649 -0.0002 -0.0001 0.4788 -0.0001 1.0258C-0.0001 1.5858 0.4649 2.0648 1.0119 2.0648H5.6329L7.8199 17.0758C8.1069 19.0178 9.1329 20.2348 11.1149 20.2348ZM29.2309 5.3868L28.2599 11.9358C28.1499 12.7828 27.6989 13.3168 26.8929 13.3168H9.4469L8.2849 5.3868ZM12.1949 26.8788C13.4259 26.8788 14.4099 25.9078 14.4099 24.6638C14.4099 23.4338 13.4259 22.4488 12.1949 22.4488C10.9509 22.4488 9.9669 23.4338 9.9669 24.6638C9.9669 25.9078 10.9509 26.8788 12.1949 26.8788ZM24.9789 26.8788C26.2229 26.8788 27.2069 25.9078 27.2069 24.6638C27.2069 23.4338 26.2229 22.4488 24.9789 22.4488C23.7479 22.4488 22.7499 23.4338 22.7499 24.6638C22.7499 25.9078 23.7479 26.8788 24.9789 26.8788Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.91015625 27.494140625"
          className={className}
        >
          <path
            d="              M11.2109 20.5079H27.0979C27.8089 20.5079 28.4509 19.9609 28.4509 19.1539C28.4509 18.3609 27.8089 17.8149 27.0979 17.8149H11.5659C10.9919 17.8149 10.6229 17.4039 10.5409 16.7889L10.3359 15.3949H27.2479C29.4079 15.3949 30.5569 14.0959 30.8709 11.9359L31.8559 5.3319C31.8829 5.1409 31.9099 4.9079 31.9099 4.7439C31.9099 3.8559 31.3219 3.2399 30.2419 3.2399H8.5859L8.3949 1.9139C8.2169 0.6429 7.6699 -0.0001 6.0569 -0.0001H1.4629C0.6699 -0.0001 -0.0001 0.6699 -0.0001 1.4769C-0.0001 2.2699 0.6699 2.9399 1.4629 2.9399H5.5239L7.5879 17.0759C7.9019 19.2089 9.0509 20.5079 11.2109 20.5079ZM28.7519 5.9339L27.9449 11.6899C27.8629 12.3179 27.5349 12.7009 26.9339 12.7009H9.9529L8.9689 5.9339ZM12.3459 27.4939C13.7269 27.4939 14.8339 26.3869 14.8339 25.0059C14.8339 23.6249 13.7269 22.5179 12.3459 22.5179C10.9649 22.5179 9.8569 23.6249 9.8569 25.0059C9.8569 26.3869 10.9649 27.4939 12.3459 27.4939ZM24.8829 27.4939C26.2639 27.4939 27.3709 26.3869 27.3709 25.0059C27.3709 23.6249 26.2639 22.5179 24.8829 22.5179C23.5019 22.5179 22.3809 23.6249 22.3809 25.0059C22.3809 26.3869 23.5019 27.4939 24.8829 27.4939Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.638671875 26.154296875"
          className={className}
        >
          <path
            d="              M10.6089 19.66H27.0839C27.3299 19.66 27.5489 19.455 27.5489 19.182C27.5489 18.908 27.3299 18.703 27.0839 18.703H10.8279C9.8569 18.703 9.2829 18.143 9.1189 17.103L8.7769 14.861H26.7969C28.4649 14.861 29.1619 13.945 29.3949 12.373L30.5979 4.662C30.6109 4.539 30.6389 4.307 30.6389 4.238C30.6389 3.746 30.3519 3.445 29.7909 3.445H7.0409L6.6309 0.738C6.5629 0.26 6.3709 0 5.6739 0H0.4649C0.1909 0 -0.0001 0.219 -0.0001 0.478C-0.0001 0.725 0.1909 0.957 0.4649 0.957H5.7009L8.1209 17.309C8.3399 18.771 9.1059 19.66 10.6089 19.66ZM29.5999 4.402L28.3969 12.291C28.2319 13.33 27.7539 13.904 26.8109 13.904H8.6269L7.1909 4.402ZM12.4549 26.154C13.5899 26.154 14.4789 25.266 14.4789 24.131C14.4789 22.996 13.5899 22.107 12.4549 22.107C11.3339 22.107 10.4319 22.996 10.4319 24.131C10.4319 25.266 11.3339 26.154 12.4549 26.154ZM24.7189 26.154C25.8399 26.154 26.7419 25.266 26.7419 24.131C26.7419 22.996 25.8399 22.107 24.7189 22.107C23.5839 22.107 22.6679 22.996 22.6679 24.131C22.6679 25.266 23.5839 26.154 24.7189 26.154Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.37890625 25.94921875"
          className={className}
        >
          <path
            d="              M10.4589 19.4963H27.0839C27.2479 19.4963 27.3849 19.3593 27.3849 19.1683C27.3849 18.9903 27.2479 18.8533 27.0839 18.8533H10.6639C9.6519 18.8533 9.0369 18.2933 8.8589 17.1993L8.4899 14.7113H26.7149C28.2739 14.7113 28.8749 13.9043 29.1069 12.4273L30.3239 4.5803C30.3519 4.4703 30.3789 4.2523 30.3789 4.1833C30.3789 3.7463 30.1469 3.4863 29.6409 3.4863H6.7679L6.3159 0.5063C6.2619 0.1773 6.1249 0.0003 5.6329 0.0003H0.3009C0.1229 0.0003 -0.0001 0.1503 -0.0001 0.3143C-0.0001 0.4783 0.1229 0.6293 0.3009 0.6293H5.7289L8.2169 17.3773C8.4079 18.7033 9.0919 19.4963 10.4589 19.4963ZM29.7089 4.1293L28.4379 12.4003C28.2599 13.4943 27.7679 14.0823 26.7829 14.0823H8.3949L6.8629 4.1293ZM12.5369 25.9493C13.6309 25.9493 14.5059 25.0743 14.5059 23.9803C14.5059 22.8863 13.6309 22.0113 12.5369 22.0113C11.4429 22.0113 10.5679 22.8863 10.5679 23.9803C10.5679 25.0743 11.4429 25.9493 12.5369 25.9493ZM24.6369 25.9493C25.7309 25.9493 26.6059 25.0743 26.6059 23.9803C26.6059 22.8863 25.7309 22.0113 24.6369 22.0113C23.5429 22.0113 22.6539 22.8863 22.6539 23.9803C22.6539 25.0743 23.5429 25.9493 24.6369 25.9493Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
