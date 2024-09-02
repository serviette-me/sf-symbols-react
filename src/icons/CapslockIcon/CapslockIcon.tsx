import { IconProps } from "../../types"

export default function CapslockIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.884765625 30.734375"
          className={className}
        >
          <path
            d="              M9.4749 20.1388H21.4099C23.4879 20.1388 24.6909 19.0448 24.6909 16.9808V15.2848H28.2869C29.7639 15.2848 30.8849 14.3558 30.8849 13.0428C30.8849 12.3318 30.5289 11.4978 29.7909 10.8828L18.2789 1.2848C17.0629 0.2868 16.3519 -0.0002 15.4489 -0.0002C14.5329 -0.0002 13.8219 0.2868 12.6059 1.2848L1.0939 10.8828C0.3559 11.4978 -0.0001 12.3318 -0.0001 13.0428C-0.0001 14.3558 1.1209 15.2848 2.5979 15.2848H6.1929V16.9808C6.1929 19.0448 7.3969 20.1388 9.4749 20.1388ZM11.1019 16.2828C10.9379 16.2828 10.8009 16.1468 10.8009 15.9828V11.9218C10.8009 11.5798 10.7189 11.4978 10.3769 11.4978H6.8359C6.7949 11.4978 6.7539 11.4708 6.7539 11.4158C6.7539 11.3478 6.8089 11.3068 6.9039 11.2248L15.2989 4.6488C15.3539 4.6078 15.4079 4.5938 15.4629 4.5938C15.5179 4.5938 15.5589 4.6078 15.6129 4.6488L23.9939 11.2248C24.1039 11.3068 24.1449 11.3478 24.1449 11.4158C24.1449 11.4708 24.1169 11.4978 24.0629 11.4978H20.5489C20.1929 11.4978 20.1249 11.5798 20.1249 11.9218V15.9828C20.1249 16.1468 19.9749 16.2828 19.8109 16.2828ZM9.4879 30.7348H21.3829C23.3519 30.7348 24.7189 29.4898 24.7189 27.4668V25.1428C24.7189 23.2698 23.3519 21.8748 21.3829 21.8748H9.4879C7.5199 21.8748 6.1519 23.2698 6.1519 25.1428V27.4668C6.1519 29.4898 7.5199 30.7348 9.4879 30.7348ZM11.1289 26.8648C10.9649 26.8648 10.8419 26.7288 10.8419 26.5648V26.0448C10.8419 25.8808 10.9649 25.7438 11.1289 25.7438H19.7419C19.9059 25.7438 20.0289 25.8808 20.0289 26.0448V26.5648C20.0289 26.7288 19.9059 26.8648 19.7419 26.8648Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.818359375 29.681640625"
          className={className}
        >
          <path
            d="              M9.8159 19.9885H20.0019C21.9979 19.9885 23.1059 18.8805 23.1059 16.9535V14.9435H27.4939C28.7929 14.9435 29.8179 14.1365 29.8179 12.9605C29.8179 12.2775 29.4769 11.6075 28.7929 11.0335L17.1719 1.0665C16.2829 0.3145 15.6679 0.0005 14.9019 0.0005C14.1499 0.0005 13.5349 0.3145 12.6469 1.0665L1.0249 11.0465C0.3279 11.6345 -0.0001 12.2775 -0.0001 12.9605C-0.0001 14.1365 1.0119 14.9435 2.3239 14.9435H6.6989V16.9535C6.6989 18.8805 7.8199 19.9885 9.8159 19.9885ZM10.7319 17.0355C10.3909 17.0355 10.1449 16.7895 10.1449 16.4605V12.4555C10.1449 12.1135 10.0489 12.0175 9.7069 12.0175H4.9629C4.8949 12.0175 4.8539 11.9765 4.8539 11.9085C4.8539 11.8535 4.8809 11.8125 4.9629 11.7445L14.6969 3.6505C14.7789 3.5825 14.8479 3.5545 14.9159 3.5545C14.9839 3.5545 15.0529 3.5825 15.1349 3.6505L24.8559 11.7445C24.9379 11.8125 24.9789 11.8535 24.9789 11.9085C24.9789 11.9765 24.9239 12.0175 24.8559 12.0175H20.1249C19.7829 12.0175 19.6739 12.1135 19.6739 12.4555V16.4605C19.6739 16.7895 19.4279 17.0355 19.0999 17.0355ZM9.5289 29.6815H20.2209C21.9979 29.6815 23.1329 28.6285 23.1329 26.8105V24.6775C23.1329 22.9415 21.9979 21.7925 20.2209 21.7925H9.5289C7.7519 21.7925 6.6169 22.9555 6.6169 24.6775V26.8105C6.6169 28.6155 7.7519 29.6815 9.5289 29.6815ZM10.4999 26.7835C10.1859 26.7835 9.9939 26.5915 9.9939 26.2635V25.2245C9.9939 24.8965 10.1859 24.6915 10.4999 24.6915H19.2499C19.5649 24.6915 19.7559 24.8965 19.7559 25.2245V26.2635C19.7559 26.5915 19.5649 26.7835 19.2499 26.7835Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.37890625 30.2421875"
          className={className}
        >
          <path
            d="              M9.6389 20.0705H20.7399C22.7769 20.0705 23.9529 18.9765 23.9529 16.9805V15.1345H27.9179C29.2989 15.1345 30.3789 14.2595 30.3789 13.0155C30.3789 12.3045 30.0369 11.5525 29.3129 10.9645L17.7599 1.1895C16.6929 0.3005 16.0239 0.0005 15.1899 0.0005C14.3559 0.0005 13.6859 0.3005 12.6189 1.1895L1.0659 10.9645C0.3419 11.5665 -0.0001 12.3045 -0.0001 13.0155C-0.0001 14.2595 1.0799 15.1345 2.4609 15.1345H6.4259V16.9805C6.4259 18.9765 7.6019 20.0705 9.6389 20.0705ZM10.9239 16.6525C10.6779 16.6525 10.4859 16.4605 10.4859 16.2145V12.1815C10.4859 11.8395 10.4039 11.7445 10.0629 11.7445H5.9609C5.8929 11.7445 5.8519 11.7165 5.8519 11.6625C5.8519 11.5935 5.8929 11.5525 5.9879 11.4845L15.0119 4.1835C15.0799 4.1285 15.1349 4.1155 15.2029 4.1155C15.2579 4.1155 15.3259 4.1285 15.3949 4.1835L24.4039 11.4845C24.4999 11.5525 24.5409 11.5935 24.5409 11.6625C24.5409 11.7165 24.4999 11.7445 24.4319 11.7445H20.3439C20.0019 11.7445 19.9059 11.8395 19.9059 12.1815V16.2145C19.9059 16.4605 19.7149 16.6525 19.4819 16.6525ZM9.5019 30.2425H20.8359C22.7089 30.2425 23.9669 29.0935 23.9669 27.1665V24.9375C23.9669 23.1195 22.7089 21.8475 20.8359 21.8475H9.5019C7.6289 21.8475 6.3709 23.1325 6.3709 24.9375V27.1665C6.3709 29.0935 7.6289 30.2425 9.5019 30.2425ZM10.8419 26.8375C10.5959 26.8375 10.4319 26.6735 10.4319 26.4275V25.6625C10.4319 25.4295 10.5959 25.2515 10.8419 25.2515H19.5099C19.7419 25.2515 19.9059 25.4295 19.9059 25.6625V26.4275C19.9059 26.6735 19.7419 26.8375 19.5099 26.8375Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.46484375 27.64453125"
          className={className}
        >
          <path
            d="              M9.7479 19.4823H18.7029C20.3569 19.4823 21.3009 18.4843 21.3009 16.9123V14.1503H26.7829C27.7399 14.1503 28.4649 13.5763 28.4649 12.7013C28.4649 12.1683 28.1909 11.7303 27.6859 11.2793L15.8179 0.8203C15.1899 0.2733 14.7659 0.0003 14.2319 0.0003C13.6989 0.0003 13.2749 0.2733 12.6469 0.8203L0.7789 11.2933C0.2459 11.7573 -0.0001 12.1683 -0.0001 12.7013C-0.0001 13.5763 0.7249 14.1503 1.6819 14.1503H7.1639V16.9123C7.1639 18.4843 8.1069 19.4823 9.7479 19.4823ZM9.8989 17.8823C9.3239 17.8823 8.9139 17.4863 8.9139 16.9123V12.9613C8.9139 12.6603 8.7909 12.5373 8.4899 12.5373H2.4339C2.2829 12.5373 2.2149 12.4683 2.2149 12.3863C2.2149 12.3043 2.2419 12.2363 2.3239 12.1543L13.7679 2.1603C13.9729 1.9683 14.0819 1.9003 14.2319 1.9003C14.3829 1.9003 14.4919 1.9683 14.6969 2.1603L26.1269 12.1543C26.2229 12.2363 26.2499 12.3043 26.2499 12.3863C26.2499 12.4683 26.1819 12.5373 26.0309 12.5373H19.9749C19.6599 12.5373 19.5509 12.6603 19.5509 12.9613V16.9123C19.5509 17.4863 19.1409 17.8823 18.5659 17.8823ZM9.2559 27.6443H19.1129C20.4939 27.6443 21.3009 26.8793 21.3009 25.4843V23.7073C21.3009 22.3123 20.4939 21.4783 19.1129 21.4783H9.2559C7.8749 21.4783 7.0679 22.3263 7.0679 23.7073V25.4843C7.0679 26.8653 7.8749 27.6443 9.2559 27.6443ZM9.4609 26.1273C8.9689 26.1273 8.6679 25.8673 8.6679 25.3613V23.8303C8.6679 23.3243 8.9689 22.9963 9.4609 22.9963H18.9079C19.4139 22.9963 19.7009 23.3243 19.7009 23.8303V25.3613C19.7009 25.8673 19.4139 26.1273 18.9079 26.1273Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.12109375 28.998046875"
          className={className}
        >
          <path
            d="              M10.0219 19.8925H19.0999C21.0409 19.8925 22.0939 18.7855 22.0939 16.9255V14.7105H26.9879C28.1779 14.7105 29.1209 13.9865 29.1209 12.8925C29.1209 12.2365 28.7929 11.6755 28.1499 11.1155L16.4609 0.9165C15.7769 0.3285 15.2309 0.0005 14.5609 0.0005C13.9039 0.0005 13.3439 0.3285 12.6599 0.9165L0.9709 11.1285C0.3149 11.7035 -0.0001 12.2365 -0.0001 12.8925C-0.0001 13.9865 0.9429 14.7105 2.1469 14.7105H7.0269V16.9255C7.0269 18.7855 8.0799 19.8925 10.0219 19.8925ZM10.4999 17.5135C10.0489 17.5135 9.7339 17.1995 9.7339 16.7485V12.7835C9.7339 12.4555 9.6109 12.3325 9.2829 12.3325H3.7739C3.6779 12.3325 3.6369 12.2915 3.6369 12.2225C3.6369 12.1675 3.6499 12.1265 3.7189 12.0585L14.3009 3.0075C14.4099 2.9125 14.4789 2.8715 14.5609 2.8715C14.6559 2.8715 14.7249 2.9125 14.8339 3.0075L25.4019 12.0585C25.4709 12.1265 25.4979 12.1675 25.4979 12.2225C25.4979 12.2915 25.4569 12.3325 25.3609 12.3325H19.8519C19.5239 12.3325 19.3999 12.4555 19.3999 12.7835V16.7485C19.3999 17.1855 19.0719 17.5135 18.6349 17.5135ZM9.5429 28.9985H19.4819C21.1369 28.9985 22.1209 28.0685 22.1209 26.3865V24.3765C22.1209 22.7225 21.1369 21.7385 19.4819 21.7385H9.5429C7.9019 21.7385 6.9179 22.7365 6.9179 24.3765V26.3865C6.9179 28.0545 7.9019 28.9985 9.5429 28.9985ZM10.1039 26.7285C9.6799 26.7285 9.4469 26.4965 9.4469 26.0725V24.6915C9.4469 24.2675 9.6799 24.0075 10.1039 24.0075H18.9219C19.3459 24.0075 19.5779 24.2675 19.5779 24.6915V26.0725C19.5779 26.4965 19.3459 26.7285 18.9219 26.7285Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.73828125 28.615234375"
          className={className}
        >
          <path
            d="              M10.1449 19.8375H18.5939C20.5079 19.8375 21.5199 18.7165 21.5199 16.9125V14.5745H26.7009C27.8359 14.5745 28.7379 13.9045 28.7379 12.8515C28.7379 12.2095 28.4099 11.7035 27.7949 11.1695L16.0649 0.8205C15.4899 0.3285 14.9839 0.0005 14.3689 0.0005C13.7539 0.0005 13.2479 0.3285 12.6739 0.8205L0.9429 11.1835C0.3009 11.7445 -0.0001 12.2095 -0.0001 12.8515C-0.0001 13.9045 0.9019 14.5745 2.0369 14.5745H7.2189V16.9125C7.2189 18.7165 8.2309 19.8375 10.1449 19.8375ZM10.3629 17.7735C9.8569 17.7735 9.5019 17.4315 9.5019 16.9125V12.9745C9.5019 12.6465 9.3789 12.5095 9.0369 12.5095H3.0899C2.9939 12.5095 2.9399 12.4685 2.9399 12.4005C2.9399 12.3455 2.9669 12.2915 3.0219 12.2365L14.0819 2.6385C14.1909 2.5295 14.2739 2.4885 14.3689 2.4885C14.4649 2.4885 14.5469 2.5295 14.6559 2.6385L25.7169 12.2365C25.7719 12.2915 25.7989 12.3455 25.7989 12.4005C25.7989 12.4685 25.7439 12.5095 25.6489 12.5095H19.7009C19.3729 12.5095 19.2359 12.6465 19.2359 12.9745V16.9125C19.2359 17.4175 18.8669 17.7735 18.3749 17.7735ZM9.5569 28.6155H19.0589C20.6449 28.6155 21.5469 27.7405 21.5469 26.1545V24.1995C21.5469 22.5995 20.6449 21.6975 19.0589 21.6975H9.5569C7.9839 21.6975 7.0819 22.6135 7.0819 24.1995V26.1545C7.0819 27.7265 7.9839 28.6155 9.5569 28.6155ZM9.8709 26.6875C9.3929 26.6875 9.1469 26.4415 9.1469 25.9625V24.3905C9.1469 23.9125 9.3929 23.6255 9.8709 23.6255H18.7439C19.2229 23.6255 19.4819 23.9125 19.4819 24.3905V25.9625C19.4819 26.4415 19.2229 26.6875 18.7439 26.6875Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.421875 29.298828125"
          className={className}
        >
          <path
            d="              M9.9399 19.9335H19.4819C21.4509 19.9335 22.5309 18.8265 22.5309 16.9395V14.8065H27.2069C28.4509 14.8065 29.4219 14.0545 29.4219 12.9195C29.4219 12.2505 29.0799 11.6485 28.4239 11.0875L16.7619 0.9705C15.9959 0.3145 15.4219 0.0005 14.7109 0.0005C13.9999 0.0005 13.4259 0.3145 12.6599 0.9705L0.9979 11.0875C0.3149 11.6755 -0.0001 12.2505 -0.0001 12.9195C-0.0001 14.0545 0.9709 14.8065 2.2149 14.8065H6.8909V16.9395C6.8909 18.8265 7.9709 19.9335 9.9399 19.9335ZM10.5959 17.3085C10.1989 17.3085 9.9119 17.0215 9.9119 16.6255V12.6465C9.9119 12.3045 9.8029 12.1955 9.4609 12.1955H4.2789C4.1969 12.1955 4.1559 12.1545 4.1559 12.0855C4.1559 12.0315 4.1839 11.9905 4.2659 11.9215L14.4649 3.2815C14.5609 3.1995 14.6429 3.1715 14.7109 3.1715C14.7929 3.1715 14.8609 3.1995 14.9569 3.2815L25.1699 11.9215C25.2379 11.9905 25.2659 12.0315 25.2659 12.0855C25.2659 12.1545 25.2249 12.1955 25.1429 12.1955H19.9749C19.6329 12.1955 19.5239 12.3045 19.5239 12.6465V16.6255C19.5239 17.0075 19.2229 17.3085 18.8259 17.3085ZM9.5429 29.2985H19.7969C21.5059 29.2985 22.5589 28.3005 22.5589 26.5785V24.5005C22.5589 22.8185 21.5059 21.7655 19.7969 21.7655H9.5429C7.8339 21.7655 6.7809 22.8325 6.7809 24.5005V26.5785C6.7809 28.3005 7.8339 29.2985 9.5429 29.2985ZM10.2809 26.7555C9.8989 26.7555 9.6799 26.5375 9.6799 26.1545V24.9235C9.6799 24.5415 9.8989 24.3085 10.2809 24.3085H19.0589C19.4409 24.3085 19.6599 24.5415 19.6599 24.9235V26.1545C19.6599 26.5375 19.4409 26.7555 19.0589 26.7555Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.095703125 26.345703125"
          className={className}
        >
          <path
            d="              M9.2289 19.0174H18.8669C20.1659 19.0174 20.9999 18.1694 20.9999 16.8984V13.5624H26.8929C27.6039 13.5624 28.0959 13.1524 28.0959 12.4964C28.0959 12.0994 27.9179 11.7574 27.5349 11.4294L15.4899 0.8064C14.7929 0.1914 14.4649 0.0004 14.0409 0.0004C13.6309 0.0004 13.3029 0.1914 12.6059 0.8064L0.5609 11.4294C0.1779 11.7714 -0.0001 12.0994 -0.0001 12.4964C-0.0001 13.1524 0.4919 13.5624 1.2029 13.5624H7.0959V16.8984C7.0959 18.1694 7.9299 19.0174 9.2289 19.0174ZM9.2829 18.0334C8.6129 18.0334 8.1349 17.5684 8.1349 16.8984V12.9474C8.1349 12.6734 8.0389 12.5784 7.7659 12.5784H1.5589C1.3399 12.5784 1.2439 12.4824 1.2439 12.3454C1.2439 12.2364 1.2719 12.1544 1.4079 12.0314L13.3439 1.5314C13.6859 1.2164 13.8359 1.1214 14.0409 1.1214C14.2599 1.1214 14.4099 1.2164 14.7519 1.5314L26.6879 12.0314C26.8239 12.1544 26.8519 12.2364 26.8519 12.3454C26.8519 12.4824 26.7559 12.5784 26.5369 12.5784H20.3299C20.0569 12.5784 19.9609 12.6734 19.9609 12.9474V16.8984C19.9609 17.5684 19.4819 18.0334 18.8129 18.0334ZM8.8589 26.3454H19.1819C20.3029 26.3454 20.9859 25.7164 20.9859 24.5954V23.0644C20.9859 21.9434 20.3029 21.1914 19.1819 21.1914H8.8589C7.7379 21.1914 7.0549 21.9434 7.0549 23.0644V24.5954C7.0549 25.7164 7.7379 26.3454 8.8589 26.3454ZM8.9279 25.3884C8.3809 25.3884 8.0389 25.1154 8.0389 24.5544V23.1054C8.0389 22.5444 8.3809 22.1484 8.9279 22.1484H19.1129C19.6599 22.1484 20.0019 22.5444 20.0019 23.1054V24.5544C20.0019 25.1154 19.6599 25.3884 19.1129 25.3884Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.904296875 25.689453125"
          className={className}
        >
          <path
            d="              M8.9689 18.785H18.9359C20.0569 18.785 20.8359 18.02 20.8359 16.898V13.275H26.9469C27.5349 13.275 27.9039 12.934 27.9039 12.4C27.9039 12.072 27.7679 11.785 27.4669 11.512L15.3259 0.807C14.5879 0.164 14.3149 0 13.9589 0C13.5899 0 13.3159 0.164 12.5779 0.807L0.4509 11.512C0.1369 11.785 -0.0001 12.072 -0.0001 12.4C-0.0001 12.934 0.3689 13.275 0.9569 13.275H7.0679V16.898C7.0679 18.02 7.8479 18.785 8.9689 18.785ZM8.9549 18.102C8.2439 18.102 7.7379 17.609 7.7379 16.898V12.947C7.7379 12.687 7.6429 12.605 7.3829 12.605H1.1209C0.8479 12.605 0.7379 12.496 0.7379 12.346C0.7379 12.223 0.7789 12.113 0.9429 11.977L13.1249 1.217C13.5349 0.848 13.6989 0.725 13.9589 0.725C14.2049 0.725 14.3829 0.848 14.7789 1.217L26.9609 11.977C27.1249 12.113 27.1659 12.223 27.1659 12.346C27.1659 12.496 27.0569 12.605 26.7969 12.605H20.5219C20.2619 12.605 20.1659 12.687 20.1659 12.947V16.898C20.1659 17.609 19.6599 18.102 18.9489 18.102ZM8.6539 25.689H19.2229C20.1929 25.689 20.8219 25.143 20.8219 24.158V22.736C20.8219 21.752 20.1929 21.055 19.2229 21.055H8.6539C7.6699 21.055 7.0549 21.752 7.0549 22.736V24.158C7.0549 25.143 7.6699 25.689 8.6539 25.689ZM8.6539 25.02C8.0939 25.02 7.7249 24.732 7.7249 24.158V22.723C7.7249 22.148 8.0939 21.725 8.6539 21.725H19.2229C19.7829 21.725 20.1519 22.148 20.1519 22.723V24.158C20.1519 24.732 19.7829 25.02 19.2229 25.02Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
