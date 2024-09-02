import { IconProps } from "../../types"

export default function WindowAwningIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.49609375 30.87109375"
          className={className}
        >
          <path
            d="              M0 28.438C0 29.777 1.094 30.871 2.434 30.871H31.076C32.416 30.871 33.496 29.777 33.496 28.438C33.496 27.098 32.416 26.018 31.076 26.018H30.775V18.32C32.252 17.787 32.895 16.447 32.594 14.369L31.104 4.074C30.748 1.654 29.477 0 27.043 0H6.494C4.047 0 2.775 1.641 2.42 4.074L0.916 14.369C0.615 16.447 1.258 17.787 2.748 18.32V26.018H2.434C1.094 26.018 0 27.098 0 28.438ZM6.918 7.438L7.273 5.182C7.314 4.99 7.396 4.854 7.588 4.854H14.766L14.684 7.438ZM18.771 4.854H25.936C26.127 4.854 26.223 4.99 26.25 5.182L26.592 7.438H18.854ZM5.988 13.385L6.33 11.143H14.561L14.479 13.727H6.275C6.098 13.727 5.947 13.576 5.988 13.385ZM18.963 11.143H27.18L27.535 13.385C27.563 13.576 27.426 13.727 27.248 13.727H19.045ZM7.602 26.018V18.58H25.922V26.018Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.720703125 29.94140625"
          className={className}
        >
          <path
            d="              M0.0003 28.1638C0.0003 29.1488 0.8063 29.9418 1.7913 29.9418H28.9293C29.9143 29.9418 30.7203 29.1488 30.7203 28.1638C30.7203 27.1798 29.9143 26.3868 28.9293 26.3868H28.4243V17.9648C29.8863 17.6918 30.6113 16.5428 30.3383 14.7248L28.6293 3.0758C28.3553 1.2438 27.3713 -0.0002 25.4983 -0.0002H5.3323C3.4593 -0.0002 2.4613 1.2438 2.2013 3.0758L0.4783 14.7248C0.2183 16.5018 0.9023 17.6368 2.2973 17.9378V26.3868H1.7913C0.8063 26.3868 0.0003 27.1798 0.0003 28.1638ZM5.1813 7.6018L5.7283 3.9098C5.7563 3.6778 5.8793 3.5408 6.0973 3.5408H13.9043L13.8363 7.6018ZM16.8983 3.5408H24.7323C24.9513 3.5408 25.0603 3.6778 25.1013 3.9098L25.6483 7.6018H16.9663ZM4.1973 14.0818L4.7443 10.3768H13.7673L13.7133 14.4918H4.5663C4.3343 14.4918 4.1563 14.3148 4.1973 14.0818ZM17.0353 10.3768H26.0723L26.6193 14.0818C26.6603 14.3148 26.4823 14.4918 26.2503 14.4918H17.0903ZM5.8243 26.3868V18.0198H24.8823V26.3868Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.18359375 30.43359375"
          className={className}
        >
          <path
            d="              M0.0003 28.3012C0.0003 29.4762 0.9433 30.4332 2.1193 30.4332H30.0503C31.2263 30.4332 32.1833 29.4762 32.1833 28.3012C32.1833 27.1382 31.2263 26.1812 30.0503 26.1812H29.6543V18.1562C31.1313 17.7322 31.8143 16.4882 31.5273 14.5332L29.9273 3.5952C29.6133 1.4492 28.4783 0.0002 26.3043 0.0002H5.9333C3.7593 0.0002 2.6253 1.4492 2.3103 3.5952L0.6973 14.5332C0.4243 16.4742 1.0803 17.7052 2.5293 18.1422V26.1812H2.1193C0.9433 26.1812 0.0003 27.1382 0.0003 28.3012ZM6.0843 7.5062L6.5353 4.5662C6.5763 4.3612 6.6723 4.2242 6.8773 4.2242H14.3553L14.2733 7.5062ZM17.8823 4.2242H25.3613C25.5663 4.2242 25.6623 4.3612 25.7033 4.5662L26.1403 7.5062H17.9513ZM5.1403 13.7132L5.5783 10.7732H14.1773L14.1093 14.0822H5.4553C5.2503 14.0822 5.0993 13.9182 5.1403 13.7132ZM18.0473 10.7732H26.6463L27.0973 13.7132C27.1253 13.9182 26.9743 14.0822 26.7693 14.0822H18.1153ZM6.7543 26.1812V18.3062H25.4293V26.1812Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.869285300925927 28.478515625"
          className={className}
        >
          <path
            d="              M0.0844 27.5492C0.0844 28.0682 0.4944 28.4782 1.0134 28.4782H25.6774C26.1974 28.4782 26.6074 28.0682 26.6074 27.5492C26.6074 27.0432 26.1974 26.6192 25.6774 26.6192H24.8984V16.9392H25.2814C26.3754 16.9392 27.0174 16.1052 26.8404 14.8472L24.8844 1.7772C24.7204 0.7242 24.0644 0.0002 22.9574 0.0002H3.9124C2.8044 0.0002 2.1484 0.7242 1.9844 1.7772L0.0294 14.8472C-0.1486 16.1052 0.4944 16.9392 1.5884 16.9392H1.7114V26.6192H1.0134C0.4944 26.6192 0.0844 27.0432 0.0844 27.5492ZM2.8734 7.6972L3.6794 2.1742C3.7204 1.8872 3.8984 1.6952 4.1994 1.6952H12.6074L12.5804 7.6972ZM14.1794 1.6952H22.6704C22.9704 1.6952 23.1484 1.8872 23.1894 2.1742L23.9964 7.6972H14.2074ZM1.8474 14.6832L2.6544 9.1742H12.5664L12.5394 15.2442H2.3404C2.0114 15.2442 1.7934 15.0122 1.8474 14.6832ZM14.2204 9.1742H24.2154L25.0214 14.6832C25.0764 15.0122 24.8574 15.2442 24.5294 15.2442H14.2484ZM3.4064 26.6192V16.9392H23.2034V26.6192Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.932543551666583 29.33984375"
          className={className}
        >
          <path
            d="              M-0.0003 27.973C-0.0003 28.725 0.6157 29.34 1.3677 29.34H27.5627C28.3147 29.34 28.9297 28.725 28.9297 27.973C28.9297 27.221 28.3147 26.605 27.5627 26.605H26.9067V17.65C28.3277 17.609 29.1347 16.584 28.8887 14.943L27.0427 2.434C26.8247 0.984 26.0177 0 24.5137 0H4.5797C3.0767 0 2.2697 0.984 2.0507 2.434L0.1917 14.943C-0.0413 16.516 0.6837 17.527 1.9957 17.65V26.605H1.3677C0.6157 26.605 -0.0003 27.221 -0.0003 27.973ZM4.0607 7.684L4.7307 3.076C4.7577 2.844 4.8947 2.68 5.1267 2.68H13.3437L13.2887 7.684ZM15.7087 2.68H23.9527C24.1997 2.68 24.3227 2.844 24.3637 3.076L25.0337 7.684H15.7497ZM3.0487 14.52L3.7327 9.885H13.2617L13.2207 14.971H3.4587C3.1997 14.971 3.0077 14.779 3.0487 14.52ZM15.7907 9.885H25.3477L26.0317 14.52C26.0727 14.779 25.8807 14.971 25.6207 14.971H15.8457ZM4.6897 26.605V17.65H24.2267V26.605Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.116474331036553 29.01171875"
          className={className}
        >
          <path
            d="              M0.0104 27.877C0.0104 28.492 0.5164 29.012 1.1454 29.012H26.7934C27.4224 29.012 27.9424 28.492 27.9424 27.877C27.9424 27.248 27.4224 26.742 26.7934 26.742H26.0554V17.459H26.3284C27.5454 17.459 28.2974 16.502 28.0784 15.08L26.1514 2.078C25.9594 0.834 25.2484 0 23.9634 0H4.1534C2.8674 0 2.1574 0.834 1.9654 2.078L0.0374 15.08C-0.1806 16.502 0.5714 17.459 1.7874 17.459H1.8424V26.742H1.1454C0.5164 26.742 0.0104 27.248 0.0104 27.877ZM3.4284 7.752L4.1664 2.625C4.2074 2.365 4.3444 2.201 4.5904 2.201H13.0394L12.9854 7.752ZM15.0354 2.201H23.5264C23.7724 2.201 23.9084 2.365 23.9494 2.625L24.6884 7.752H15.0764ZM2.4164 14.766L3.1684 9.611H12.9714L12.9444 15.258H2.8544C2.5674 15.258 2.3754 15.039 2.4164 14.766ZM15.0904 9.611H24.9484L25.6994 14.766C25.7404 15.039 25.5494 15.258 25.2624 15.258H15.1314ZM4.0434 26.742V17.459H23.8544V26.742Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.6953125 29.599609375"
          className={className}
        >
          <path
            d="              M-0.0003 28.0551C-0.0003 28.9021 0.6977 29.6001 1.5447 29.6001H28.1507C28.9977 29.6001 29.6957 28.9021 29.6957 28.0551C29.6957 27.1931 28.9977 26.4961 28.1507 26.4961H27.5487V17.7871C28.9977 17.6371 29.7637 16.5571 29.5177 14.8481L27.7127 2.7071C27.4807 1.0941 26.5917 0.0001 24.9377 0.0001H4.8947C3.2407 0.0001 2.3517 1.0801 2.1057 2.7071L0.3147 14.8481C0.0687 16.5021 0.7657 17.5681 2.1187 17.7731V26.4961H1.5447C0.6977 26.4961 -0.0003 27.1931 -0.0003 28.0551ZM4.5387 7.6431L5.1547 3.4321C5.1817 3.1991 5.3047 3.0351 5.5367 3.0351H13.5767L13.5217 7.6431ZM16.2147 3.0351H24.2817C24.5137 3.0351 24.6367 3.1991 24.6777 3.4321L25.2927 7.6431H16.2697ZM3.5407 14.3281L4.1697 10.0901H13.4807L13.4257 14.7661H3.9377C3.6917 14.7661 3.4997 14.5741 3.5407 14.3281ZM16.3107 10.0901H25.6617L26.2777 14.3281C26.3187 14.5741 26.1407 14.7661 25.8947 14.7661H16.3787ZM5.1677 26.4961V17.8141H24.4997V26.4961Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.194530695051743 27.767578125"
          className={className}
        >
          <path
            d="              M0.1769 27.1247C0.1769 27.4807 0.4639 27.7677 0.8189 27.7677H24.1979C24.5539 27.7677 24.8409 27.4807 24.8409 27.1247C24.8409 26.7557 24.5539 26.4687 24.1979 26.4687H23.3509V16.2417H23.8839C24.7999 16.2417 25.3189 15.5587 25.1689 14.5467L23.1869 1.3667C23.0629 0.5607 22.4759 -0.0003 21.6279 -0.0003H3.5669C2.7199 -0.0003 2.1179 0.5607 2.0089 1.3667L0.0259 14.5467C-0.1241 15.5587 0.3819 16.2417 1.2979 16.2417H1.5169V26.4687H0.8189C0.4639 26.4687 0.1769 26.7557 0.1769 27.1247ZM2.1179 7.6157L3.0199 1.5587C3.0619 1.2307 3.3079 1.0257 3.6629 1.0257H12.0299L12.0169 7.6157ZM13.0149 1.0257H21.5319C21.8879 1.0257 22.1199 1.2307 22.1749 1.5587L23.0769 7.6157H13.0419ZM1.0789 14.5607L1.9809 8.5727H12.0029L11.9889 15.2307H1.6669C1.2429 15.2307 1.0109 14.9707 1.0789 14.5607ZM13.0419 8.5727H23.2139L24.1159 14.5607C24.1709 14.9707 23.9379 15.2307 23.5279 15.2307H13.0689ZM2.5559 26.4687V16.2417H22.3119V26.4687Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.343302695098302 27.3984375"
          className={className}
        >
          <path
            d="              M0.2155 26.8923C0.2155 27.1793 0.4485 27.3983 0.7355 27.3983H23.4305C23.7315 27.3983 23.9495 27.1793 23.9495 26.8923C23.9495 26.5913 23.7315 26.3733 23.4305 26.3733H22.5555V15.8863H23.1705C24.0045 15.8863 24.4555 15.2713 24.3195 14.3823L22.3235 1.1483C22.2275 0.4653 21.6665 0.0003 20.9425 0.0003H3.4015C2.6765 0.0003 2.1155 0.4653 2.0205 1.1483L0.0245 14.3823C-0.1125 15.2713 0.3385 15.8863 1.1585 15.8863H1.4325V26.3733H0.7355C0.4485 26.3733 0.2155 26.5913 0.2155 26.8923ZM1.7335 7.5603L2.6905 1.2443C2.7315 0.8883 3.0045 0.6703 3.3875 0.6703H11.7405L11.7275 7.5603ZM12.4385 0.6703H20.9555C21.3385 0.6703 21.5985 0.8883 21.6535 1.2443L22.5965 7.5603H12.4515ZM0.6945 14.4923L1.6375 8.2573H11.7275L11.7135 15.2163H1.3235C0.8715 15.2163 0.6255 14.9293 0.6945 14.4923ZM12.4515 8.2573H22.7055L23.6495 14.4923C23.7175 14.9293 23.4715 15.2163 23.0205 15.2163H12.4655ZM2.1155 26.3733V15.8863H21.8715V26.3733Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}