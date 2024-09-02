import { IconProps } from "../../types"

export default function BellBadgeWaveformFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.69140625 32.033203125"
          className={className}
        >
          <path
            d="              M23.7343 14.3961C24.2813 14.3961 24.7053 13.9731 24.7053 13.4391V0.9571C24.7053 0.4101 24.2813 0.0001 23.7343 0.0001C23.2013 0.0001 22.7913 0.4241 22.7913 0.9571V13.4391C22.7913 13.9731 23.2013 14.3961 23.7343 14.3961ZM3.1443 25.7301H25.7033C27.5903 25.7301 28.8613 24.5141 28.8613 22.7231C28.8613 20.9591 27.8083 19.6741 26.4143 18.6351C25.8813 18.2381 25.5523 17.5821 25.3473 16.8301C25.3063 16.7211 25.2933 16.6391 25.2793 16.5701C24.8283 16.8031 24.2953 16.9261 23.7483 16.9261C22.4353 16.9261 21.3413 16.1871 20.7403 15.1621L20.6583 15.0121C20.5213 15.0121 20.3713 15.0251 20.2483 15.0251C18.5113 15.0251 17.0763 13.7811 16.8163 12.1131L16.7893 11.9901H16.7343C14.8063 11.9901 13.2613 10.4321 13.2613 8.5041V5.8921C13.2613 3.9651 14.8063 2.4061 16.7343 2.4061H16.8023L16.8573 2.0371C16.1323 1.5991 15.3123 1.3811 14.4243 1.3811C12.4003 1.3811 10.5953 2.6661 9.8433 4.5391C6.6993 5.6741 4.8813 8.9281 4.2653 12.9741C3.8003 15.7231 3.6363 17.7601 2.4473 18.6351C1.0523 19.6741 0.0003 20.9591 0.0003 22.7231C0.0003 24.5141 1.2573 25.7301 3.1443 25.7301ZM20.2343 12.5101C20.7813 12.5101 21.2183 12.0721 21.2183 11.5531V2.8441C21.2183 2.3241 20.7813 1.8871 20.2343 1.8871C19.7013 1.8871 19.2773 2.3241 19.2773 2.8441V11.5531C19.2773 12.0861 19.7153 12.5101 20.2343 12.5101ZM27.2483 11.9631C27.7813 11.9631 28.2053 11.5251 28.2053 10.9921V3.4041C28.2053 2.8571 27.7673 2.4331 27.2483 2.4331C26.7153 2.4331 26.2773 2.8711 26.2773 3.4041V10.9921C26.2773 11.5251 26.7153 11.9631 27.2483 11.9631ZM30.7343 10.1581C31.2813 10.1581 31.6913 9.7341 31.6913 9.2011V5.1951C31.6913 4.6481 31.2673 4.2241 30.7343 4.2241C30.1873 4.2241 29.7773 4.6621 29.7773 5.1951V9.2011C29.7773 9.7481 30.1873 10.1581 30.7343 10.1581ZM16.7203 9.4611C17.2813 9.4611 17.7053 9.0371 17.7053 8.5041V5.8921C17.7053 5.3591 17.2813 4.9351 16.7203 4.9351C16.2013 4.9351 15.7773 5.3591 15.7773 5.8921V8.5041C15.7773 9.0371 16.2013 9.4611 16.7203 9.4611ZM14.4243 32.0331C17.2673 32.0331 19.3453 30.1461 19.5093 27.8221H9.3513C9.5023 30.1461 11.5933 32.0331 14.4243 32.0331Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.009765625 31.322265625"
          className={className}
        >
          <path
            d="              M22.4493 13.658C22.9273 13.658 23.3243 13.275 23.3243 12.797V0.875C23.3243 0.383 22.9273 0 22.4493 0C21.9703 0 21.5883 0.383 21.5883 0.875V12.797C21.5883 13.289 21.9573 13.658 22.4493 13.658ZM2.5973 25.43H24.7183C26.3043 25.43 27.3163 24.486 27.3163 23.105C27.3163 21.533 26.0993 20.275 24.8143 19.154C24.1313 18.525 23.8163 17.35 23.6793 16.269C23.6663 16.092 23.6523 15.928 23.6383 15.764C23.2973 15.941 22.8733 16.037 22.4493 16.037C21.1093 16.037 20.0023 15.217 19.5233 14.082L19.4553 13.863C19.3453 13.877 19.2093 13.904 19.0993 13.904C17.5543 13.904 16.2563 12.824 15.9553 11.375L15.9273 11.197C15.8733 11.225 15.8043 11.238 15.7223 11.238C13.9453 11.238 12.5093 9.789 12.5093 7.998V5.66C12.5093 3.869 13.9453 2.42 15.7223 2.42C15.7633 2.42 15.8183 2.42 15.8593 2.42L15.9003 2.215C15.2443 1.818 14.4923 1.6 13.6583 1.6C11.6343 1.6 10.0213 2.953 9.3923 4.785C6.0023 6.002 4.4023 9.434 4.0333 14.096C3.7593 16.256 3.5543 18.238 2.5023 19.154C1.2173 20.275 0.0003 21.533 0.0003 23.105C0.0003 24.486 1.0113 25.43 2.5973 25.43ZM25.7993 11.758C26.2913 11.758 26.6603 11.375 26.6603 10.896V2.762C26.6603 2.283 26.2773 1.9 25.7993 1.9C25.3203 1.9 24.9373 2.283 24.9373 2.762V10.896C24.9373 11.375 25.3203 11.758 25.7993 11.758ZM19.0863 11.539C19.5783 11.539 19.9743 11.143 19.9743 10.664V2.98C19.9743 2.516 19.5783 2.119 19.0863 2.119C18.6073 2.119 18.2243 2.516 18.2243 2.98V10.664C18.2243 11.156 18.6213 11.539 19.0863 11.539ZM29.1483 9.57C29.6403 9.57 30.0093 9.201 30.0093 8.709V4.949C30.0093 4.457 29.6403 4.088 29.1483 4.088C28.6563 4.088 28.2873 4.471 28.2873 4.949V8.709C28.2873 9.201 28.6563 9.57 29.1483 9.57ZM15.7223 8.859C16.2283 8.859 16.6113 8.477 16.6113 7.998V5.66C16.6113 5.182 16.2283 4.785 15.7223 4.785C15.2583 4.785 14.8753 5.182 14.8753 5.66V7.998C14.8753 8.477 15.2583 8.859 15.7223 8.859ZM13.6583 31.322C16.2423 31.322 18.1293 29.531 18.2933 27.412H9.0233C9.1873 29.531 11.0743 31.322 13.6583 31.322Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.8984375 31.705078125"
          className={className}
        >
          <path
            d="              M23.1326 14.0548C23.6526 14.0548 24.0626 13.6578 24.0626 13.1388V0.9297C24.0626 0.3968 23.6526 -0.0003 23.1326 -0.0003C22.6266 -0.0003 22.2306 0.4097 22.2306 0.9297V13.1388C22.2306 13.6578 22.6136 14.0548 23.1326 14.0548ZM2.8846 25.5938H25.2386C26.9886 25.5938 28.1366 24.5138 28.1366 22.9008C28.1366 21.2328 27.0016 19.9608 25.6616 18.8948C25.0606 18.3888 24.7326 17.4868 24.5686 16.5708C24.5406 16.4338 24.5276 16.3108 24.5136 16.2008C24.1036 16.3928 23.6246 16.5158 23.1466 16.5158C21.8206 16.5158 20.7126 15.7368 20.1656 14.6558L20.0976 14.4788C19.9746 14.4918 19.8246 14.5058 19.7016 14.5058C18.0606 14.5058 16.6936 13.3438 16.4066 11.7718L16.3926 11.6207C16.3516 11.6348 16.3106 11.6348 16.2696 11.6348C14.4106 11.6348 12.9066 10.1307 12.9066 8.2718V5.7967C12.9066 3.9237 14.4106 2.4198 16.2696 2.4198C16.2966 2.4198 16.3246 2.4198 16.3516 2.4198L16.4066 2.1187C15.7226 1.7087 14.9296 1.4898 14.0686 1.4898C12.0446 1.4898 10.3356 2.8167 9.6386 4.6618C6.3706 5.8378 4.6616 9.1737 4.1566 13.5078C3.7866 15.9828 3.6096 17.9918 2.4746 18.8948C1.1346 19.9608 -0.0004 21.2328 -0.0004 22.9008C-0.0004 24.5138 1.1486 25.5938 2.8846 25.5938ZM19.7016 12.0588C20.2206 12.0588 20.6306 11.6488 20.6306 11.1428V2.9118C20.6306 2.4198 20.2206 2.0098 19.7016 2.0098C19.1816 2.0098 18.7856 2.4198 18.7856 2.9118V11.1428C18.7856 11.6618 19.1956 12.0588 19.7016 12.0588ZM26.5646 11.8668C27.0836 11.8668 27.4806 11.4568 27.4806 10.9508V3.1038C27.4806 2.5837 27.0706 2.1878 26.5646 2.1878C26.0586 2.1878 25.6486 2.5978 25.6486 3.1038V10.9508C25.6486 11.4568 26.0586 11.8668 26.5646 11.8668ZM29.9956 9.8988C30.5156 9.8988 30.8986 9.4888 30.8986 8.9688V5.0858C30.8986 4.5667 30.5016 4.1698 29.9956 4.1698C29.4766 4.1698 29.0666 4.5798 29.0666 5.0858V8.9688C29.0666 9.4888 29.4766 9.8988 29.9956 9.8988ZM16.2556 9.1878C16.7886 9.1878 17.1996 8.7778 17.1996 8.2718V5.7967C17.1996 5.2778 16.7886 4.8668 16.2556 4.8668C15.7636 4.8668 15.3536 5.2778 15.3536 5.7967V8.2718C15.3536 8.7778 15.7636 9.1878 16.2556 9.1878ZM14.0686 31.7048C16.7886 31.7048 18.7716 29.8598 18.9356 27.6308H9.2016C9.3656 29.8598 11.3476 31.7048 14.0686 31.7048Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.357421875 30.201171875"
          className={className}
        >
          <path
            d="              M20.5628 13.0019C20.9318 13.0019 21.2048 12.7289 21.2048 12.3589V0.6429C21.2048 0.2739 20.9318 -0.0001 20.5628 -0.0001C20.2068 -0.0001 19.9198 0.2739 19.9198 0.6429V12.3589C19.9198 12.7289 20.1938 13.0019 20.5628 13.0019ZM23.6248 11.5939C23.9938 11.5939 24.2808 11.3069 24.2808 10.9509V2.0369C24.2808 1.6819 23.9938 1.3949 23.6248 1.3949C23.2698 1.3949 22.9958 1.6819 22.9958 2.0369V10.9509C22.9958 11.3069 23.2698 11.5939 23.6248 11.5939ZM1.5998 25.1839H23.8298C24.8148 25.1839 25.4158 24.6499 25.4158 23.8579C25.4158 22.4769 24.0898 21.2869 22.9418 20.0699C21.9978 19.0589 21.7248 17.1579 21.6148 15.3949C21.6018 15.1209 21.5878 14.8749 21.5738 14.6149C21.3148 14.8199 20.9448 14.9429 20.5628 14.9429C19.3048 14.9429 18.2928 14.0819 18.0608 12.9199L18.0328 12.4549C17.8828 12.5509 17.6918 12.6059 17.4868 12.6059C16.2698 12.6059 15.2168 11.7309 14.9978 10.5819L14.9708 10.1989C14.8068 10.2949 14.6148 10.3629 14.4098 10.3629C12.9878 10.3629 11.8258 9.2009 11.8258 7.7789V5.2089C11.8258 3.7739 12.9878 2.6249 14.4098 2.6249C14.4788 2.6249 14.5608 2.6249 14.6148 2.6389L14.6288 2.5839C14.0818 2.2699 13.4258 2.0649 12.7148 2.0649C10.8148 2.0649 9.4338 3.4179 9.0098 5.2499C5.5368 6.3709 4.1558 9.6659 3.9378 14.2599C3.7048 16.4059 3.5958 18.8669 2.4748 20.0699C1.3398 21.2869 -0.0002 22.4769 -0.0002 23.8579C-0.0002 24.6499 0.6148 25.1839 1.5998 25.1839ZM17.4998 10.6779C17.8558 10.6779 18.1428 10.3909 18.1428 10.0219V2.9529C18.1428 2.5979 17.8558 2.3109 17.4998 2.3109C17.1308 2.3109 16.8438 2.5979 16.8438 2.9529V10.0219C16.8438 10.3909 17.1308 10.6779 17.4998 10.6779ZM26.7008 9.1739C27.0838 9.1739 27.3578 8.8999 27.3578 8.5179V4.4569C27.3578 4.1019 27.0838 3.8149 26.7008 3.8149C26.3458 3.8149 26.0588 4.1019 26.0588 4.4569V8.5179C26.0588 8.8869 26.3458 9.1739 26.7008 9.1739ZM14.4098 8.4219C14.7788 8.4219 15.0668 8.1349 15.0668 7.7789V5.2089C15.0668 4.8399 14.7788 4.5659 14.4098 4.5659C14.0548 4.5659 13.7808 4.8399 13.7808 5.2089V7.7789C13.7808 8.1349 14.0548 8.4219 14.4098 8.4219ZM12.7148 30.2009C14.9298 30.2009 16.5018 28.6149 16.7478 26.7829H8.6818C8.9278 28.6149 10.4998 30.2009 12.7148 30.2009Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.95703125 30.857421875"
          className={className}
        >
          <path
            d="              M21.6289 13.18C22.0799 13.18 22.4359 12.824 22.4359 12.373V0.82C22.4359 0.355 22.0799 0 21.6289 0C21.1779 0 20.8219 0.355 20.8219 0.82V12.373C20.8219 12.838 21.1639 13.18 21.6289 13.18ZM24.8829 11.621C25.3479 11.621 25.6899 11.266 25.6899 10.814V2.352C25.6899 1.9 25.3339 1.559 24.8829 1.559C24.4449 1.559 24.0899 1.914 24.0899 2.352V10.814C24.0899 11.266 24.4449 11.621 24.8829 11.621ZM2.2559 25.238H24.0899C25.4839 25.238 26.3459 24.473 26.3459 23.338C26.3459 21.902 25.0199 20.658 23.8029 19.469C23.0239 18.703 22.7089 17.199 22.6269 15.914C22.6129 15.682 22.6129 15.463 22.5999 15.244C22.3259 15.381 21.9839 15.449 21.6289 15.449C20.2619 15.449 19.1409 14.588 18.7439 13.385L18.7029 13.111C18.6079 13.152 18.4839 13.18 18.3749 13.18C16.9669 13.18 15.7359 12.209 15.4219 10.897L15.3949 10.691C15.2989 10.719 15.2029 10.746 15.0939 10.746C13.4119 10.746 12.0309 9.365 12.0309 7.67V5.496C12.0309 3.801 13.4119 2.42 15.0939 2.42C15.1489 2.42 15.2169 2.42 15.2579 2.434L15.2849 2.324C14.6839 1.955 13.9729 1.75 13.1799 1.75C11.1559 1.75 9.6659 3.131 9.1189 4.936C5.5649 6.221 4.1019 9.762 3.9099 14.793C3.7329 16.584 3.5139 18.539 2.5569 19.469C1.3259 20.658 -0.0001 21.902 -0.0001 23.338C-0.0001 24.473 0.8609 25.238 2.2559 25.238ZM18.3749 10.91C18.8259 10.91 19.1819 10.555 19.1819 10.09V3.076C19.1819 2.625 18.8259 2.27 18.3749 2.27C17.9239 2.27 17.5679 2.625 17.5679 3.076V10.09C17.5679 10.555 17.9239 10.91 18.3749 10.91ZM28.1499 9.188C28.6149 9.188 28.9569 8.846 28.9569 8.381V4.785C28.9569 4.334 28.6019 3.979 28.1499 3.979C27.6989 3.979 27.3439 4.348 27.3439 4.785V8.381C27.3439 8.832 27.6989 9.188 28.1499 9.188ZM15.0939 8.477C15.5589 8.477 15.9139 8.121 15.9139 7.67V5.496C15.9139 5.045 15.5589 4.689 15.0939 4.689C14.6699 4.689 14.3149 5.045 14.3149 5.496V7.67C14.3149 8.121 14.6699 8.477 15.0939 8.477ZM13.1799 30.857C15.5859 30.857 17.3499 29.135 17.5269 27.139H8.8179C8.9959 29.135 10.7599 30.857 13.1799 30.857Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.35546875 30.611328125"
          className={className}
        >
          <path
            d="              M21.1639 12.9199C21.6019 12.9199 21.9429 12.5919 21.9429 12.1539V0.7929C21.9429 0.3419 21.6019 -0.0001 21.1639 -0.0001C20.7399 -0.0001 20.3989 0.3419 20.3989 0.7929V12.1539C20.3989 12.6059 20.7269 12.9199 21.1639 12.9199ZM24.3629 11.5659C24.8009 11.5659 25.1429 11.2249 25.1429 10.7869V2.1189C25.1429 1.7089 24.8009 1.3669 24.3629 1.3669C23.9399 1.3669 23.6109 1.7089 23.6109 2.1189V10.7869C23.6109 11.2249 23.9399 11.5659 24.3629 11.5659ZM2.0649 25.1289H23.7339C25.0329 25.1289 25.7989 24.4729 25.7989 23.4749C25.7989 22.1069 24.4179 20.8769 23.2289 19.6599C22.3949 18.8129 22.0799 17.1169 22.0249 15.7229C22.0249 15.4489 22.0249 15.2029 22.0119 14.9569C21.7659 15.0799 21.4789 15.1349 21.1639 15.1349C19.7829 15.1349 18.6619 14.2459 18.3199 13.0019L18.2789 12.7149C18.1839 12.7559 18.0739 12.7829 17.9649 12.7829C16.6249 12.7829 15.4489 11.8669 15.1079 10.6369L15.0799 10.4039C14.9709 10.4449 14.8609 10.4729 14.7379 10.4729C13.0979 10.4729 11.7719 9.1469 11.7719 7.5059V5.4279C11.7719 3.7729 13.0979 2.4339 14.7379 2.4339C14.7929 2.4339 14.8749 2.4339 14.9299 2.4469L14.9429 2.3929C14.3689 2.0509 13.6719 1.8319 12.9059 1.8319C10.8829 1.8319 9.4749 3.2399 8.9549 5.0309C5.3179 6.3439 3.9239 9.9529 3.8279 15.2029C3.7189 16.7749 3.4859 18.7169 2.5839 19.6599C1.3949 20.8769 -0.0001 22.1069 -0.0001 23.4749C-0.0001 24.4729 0.7789 25.1289 2.0649 25.1289ZM17.9649 10.5549C18.3889 10.5549 18.7309 10.2269 18.7309 9.7749V3.1309C18.7309 2.7069 18.3889 2.3649 17.9649 2.3649C17.5269 2.3649 17.1989 2.7069 17.1989 3.1309V9.7749C17.1989 10.2269 17.5269 10.5549 17.9649 10.5549ZM27.5759 8.9819C28.0269 8.9819 28.3559 8.6539 28.3559 8.2169V4.7029C28.3559 4.2659 28.0269 3.9379 27.5759 3.9379C27.1519 3.9379 26.8109 4.2789 26.8109 4.7029V8.2169C26.8109 8.6409 27.1519 8.9819 27.5759 8.9819ZM14.7379 8.2579C15.1899 8.2579 15.5309 7.9159 15.5309 7.5059V5.4279C15.5309 4.9899 15.1899 4.6479 14.7379 4.6479C14.3279 4.6479 13.9859 4.9899 13.9859 5.4279V7.5059C13.9859 7.9159 14.3279 8.2579 14.7379 8.2579ZM12.9059 30.6109C15.2169 30.6109 16.9119 28.9159 17.1039 27.0019H8.7089C8.8869 28.9159 10.5819 30.6109 12.9059 30.6109Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.408203125 31.048828125"
          className={className}
        >
          <path
            d="              M21.9843 13.3843C22.4493 13.3843 22.8183 13.0153 22.8183 12.5503V0.8343C22.8183 0.3553 22.4493 0.0003 21.9843 0.0003C21.5193 0.0003 21.1503 0.3693 21.1503 0.8343V12.5503C21.1503 13.0293 21.5063 13.3843 21.9843 13.3843ZM2.4063 25.3203H24.3633C25.8403 25.3203 26.7693 24.4723 26.7693 23.2283C26.7693 21.7383 25.4843 20.4943 24.2403 19.3323C23.5023 18.6213 23.1873 17.2673 23.0783 16.0643C23.0643 15.8453 23.0643 15.6543 23.0513 15.4633C22.7363 15.6133 22.3673 15.7093 21.9843 15.7093C20.6313 15.7093 19.5103 14.8613 19.0863 13.6853L19.0313 13.4393C18.9223 13.4663 18.7993 13.4943 18.6763 13.4943C17.2133 13.4943 15.9553 12.4683 15.6403 11.1013L15.6273 10.9103C15.5453 10.9373 15.4633 10.9513 15.3673 10.9513C13.6443 10.9513 12.2363 9.5433 12.2363 7.8203V5.5643C12.2363 3.8283 13.6443 2.4203 15.3673 2.4203C15.4223 2.4203 15.4763 2.4203 15.5173 2.4203L15.5453 2.2693C14.9293 1.9003 14.1913 1.6813 13.3853 1.6813C11.3613 1.6813 9.8163 3.0623 9.2283 4.8673C5.7563 6.1253 4.2243 9.6253 3.9653 14.4923C3.7463 16.4333 3.5273 18.4163 2.5293 19.3323C1.2713 20.4943 0.0003 21.7383 0.0003 23.2283C0.0003 24.4723 0.9293 25.3203 2.4063 25.3203ZM25.2793 11.6753C25.7443 11.6753 26.1133 11.3063 26.1133 10.8413V2.5293C26.1133 2.0643 25.7443 1.6953 25.2793 1.6953C24.8143 1.6953 24.4453 2.0643 24.4453 2.5293V10.8413C24.4453 11.3063 24.8143 11.6753 25.2793 11.6753ZM18.6763 11.1703C19.1543 11.1703 19.5233 10.8003 19.5233 10.3363V3.0353C19.5233 2.5703 19.1543 2.2013 18.6763 2.2013C18.2113 2.2013 17.8553 2.5703 17.8553 3.0353V10.3363C17.8553 10.8143 18.2243 11.1703 18.6763 11.1703ZM28.5743 9.3513C29.0523 9.3513 29.4083 8.9963 29.4083 8.5173V4.8533C29.4083 4.3883 29.0523 4.0193 28.5743 4.0193C28.1093 4.0193 27.7403 4.4023 27.7403 4.8533V8.5173C27.7403 8.9823 28.1093 9.3513 28.5743 9.3513ZM15.3673 8.6403C15.8453 8.6403 16.2153 8.2713 16.2153 7.8203V5.5643C16.2153 5.0993 15.8453 4.7303 15.3673 4.7303C14.9163 4.7303 14.5473 5.0993 14.5473 5.5643V7.8203C14.5473 8.2713 14.9163 8.6403 15.3673 8.6403ZM13.3853 31.0493C15.8733 31.0493 17.6773 29.2993 17.8553 27.2613H8.9003C9.0783 29.2993 10.8963 31.0493 13.3853 31.0493Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.03125 29.681640625"
          className={className}
        >
          <path
            d="              M19.7694 13.1389C20.0294 13.1389 20.2484 12.9339 20.2484 12.6599V0.4919C20.2484 0.2189 20.0294 -0.0001 19.7694 -0.0001C19.4964 -0.0001 19.2914 0.2189 19.2914 0.4919V12.6599C19.2914 12.9339 19.4964 13.1389 19.7694 13.1389ZM22.6544 11.6619C22.9274 11.6619 23.1324 11.4569 23.1324 11.1839V1.9419C23.1324 1.6679 22.9274 1.4629 22.6544 1.4629C22.3804 1.4629 22.1754 1.6679 22.1754 1.9419V11.1839C22.1754 11.4569 22.3804 11.6619 22.6544 11.6619ZM16.8714 10.8559C17.1444 10.8559 17.3494 10.6369 17.3494 10.3629V2.7479C17.3494 2.4879 17.1444 2.2699 16.8714 2.2699C16.5974 2.2699 16.3924 2.4879 16.3924 2.7479V10.3629C16.3924 10.6369 16.5974 10.8559 16.8714 10.8559ZM0.9704 25.2789H23.9394C24.5274 25.2789 24.9234 24.9239 24.9234 24.3769C24.9234 22.9959 23.6664 21.8339 22.5724 20.6309C21.4784 19.4139 21.2594 17.2399 21.0544 14.9979C21.0414 14.7249 21.0274 14.4649 21.0004 14.1919C20.6994 14.5059 20.2484 14.7109 19.7554 14.7109C18.6754 14.7109 17.8004 13.8909 17.7324 12.8379L17.7184 12.1539C17.4724 12.3179 17.1854 12.4139 16.8574 12.4139C15.7914 12.4139 14.9164 11.5939 14.8344 10.5549V9.9669C14.5744 10.1309 14.2874 10.2269 13.9594 10.2269C12.8384 10.2269 11.9214 9.3109 11.9214 8.1759V4.9489C11.9214 3.8149 12.8384 2.8989 13.9594 2.8989C14.0414 2.8989 14.1364 2.8989 14.1914 2.9119L14.2054 2.8709C13.7264 2.5839 13.0974 2.4059 12.4554 2.4059C10.7184 2.4059 9.3924 3.6779 9.0914 5.5649C5.8384 6.4529 4.4704 9.3239 4.0744 13.0289C3.6774 15.9549 3.7464 19.0859 2.3514 20.6309C1.2574 21.8339 0.0004 22.9959 0.0004 24.3769C0.0004 24.9239 0.3824 25.2789 0.9704 25.2789ZM25.5524 9.4469C25.8264 9.4469 26.0314 9.2419 26.0314 8.9689V4.1559C26.0314 3.8969 25.8264 3.6779 25.5524 3.6779C25.2794 3.6779 25.0744 3.8969 25.0744 4.1559V8.9689C25.0744 9.2289 25.2794 9.4469 25.5524 9.4469ZM13.9724 8.6539C14.2464 8.6539 14.4514 8.4489 14.4514 8.1759V4.9489C14.4514 4.6759 14.2464 4.4709 13.9724 4.4709C13.7134 4.4709 13.4944 4.6759 13.4944 4.9489V8.1759C13.4944 8.4489 13.7134 8.6539 13.9724 8.6539ZM12.4554 29.6819C14.5334 29.6819 15.9684 28.2459 16.2834 26.5099H8.6404C8.9554 28.2459 10.3904 29.6819 12.4554 29.6819Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.34765625 29.408203125"
          className={className}
        >
          <path
            d="              M19.346 13.1932C19.564 13.1932 19.742 13.0152 19.742 12.7972V0.3962C19.742 0.1642 19.564 0.0002 19.346 0.0002C19.127 0.0002 18.949 0.1642 18.949 0.3962V12.7972C18.949 13.0152 19.127 13.1932 19.346 13.1932ZM22.148 11.6892C22.367 11.6892 22.545 11.5252 22.545 11.2932V1.8732C22.545 1.6542 22.367 1.4762 22.148 1.4762C21.916 1.4762 21.752 1.6542 21.752 1.8732V11.2932C21.752 11.5252 21.916 11.6892 22.148 11.6892ZM16.543 10.9242C16.762 10.9242 16.939 10.7602 16.939 10.5272V2.6252C16.939 2.4202 16.762 2.2282 16.543 2.2282C16.324 2.2282 16.146 2.4202 16.146 2.6252V10.5272C16.146 10.7602 16.324 10.9242 16.543 10.9242ZM0.643 25.3202H23.994C24.377 25.3202 24.65 25.0472 24.65 24.6372C24.65 23.2422 23.434 22.1072 22.367 20.9042C21.191 19.5922 21 17.2812 20.754 14.7792C20.74 14.4922 20.713 14.2322 20.686 13.9592C20.371 14.3282 19.879 14.5742 19.332 14.5742C18.348 14.5742 17.541 13.7672 17.555 12.7832V11.9902C17.254 12.1812 16.912 12.3042 16.529 12.3042C15.545 12.3042 14.738 11.5122 14.752 10.5132V9.8302C14.451 10.0212 14.109 10.1442 13.727 10.1442C12.742 10.1442 11.949 9.3512 11.949 8.3672V4.7992C11.949 3.8142 12.742 3.0212 13.727 3.0212C13.809 3.0212 13.904 3.0212 13.973 3.0492V3.0082C13.521 2.7342 12.906 2.5702 12.318 2.5702C10.65 2.5702 9.365 3.7872 9.119 5.7152C5.975 6.4672 4.607 9.1192 4.143 12.3872C3.664 15.6952 3.801 19.1812 2.27 20.9042C1.217 22.1072 0 23.2422 0 24.6372C0 25.0472 0.26 25.3202 0.643 25.3202ZM24.951 9.5702C25.17 9.5702 25.348 9.3922 25.348 9.1742V3.9922C25.348 3.7732 25.17 3.5962 24.951 3.5962C24.719 3.5962 24.555 3.7732 24.555 3.9922V9.1742C24.555 9.3922 24.719 9.5702 24.951 9.5702ZM13.74 8.7632C13.959 8.7632 14.137 8.5992 14.137 8.3672V4.7992C14.137 4.5802 13.959 4.4022 13.74 4.4022C13.521 4.4022 13.344 4.5802 13.344 4.7992V8.3672C13.344 8.5992 13.521 8.7632 13.74 8.7632ZM12.318 29.4082C14.328 29.4082 15.682 28.0412 16.023 26.3462H8.613C8.969 28.0412 10.322 29.4082 12.318 29.4082Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}