import { IconProps } from "../../types"

export default function WatchfaceApplewatchCaseIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.46484375 30.009765625"
          className={className}
        >
          <path
            d="              M7.6697 30.0095H18.7847C23.3107 30.0095 26.4547 26.8105 26.4547 22.1895V13.9315H26.5647C27.7127 13.9315 28.4647 13.1385 28.4647 11.8945V9.5975C28.4647 8.3805 27.7127 7.5605 26.5647 7.5605H26.4547C26.3457 3.0895 23.2287 0.0005 18.7847 0.0005H7.6697C3.1587 0.0005 -0.0003 3.2125 -0.0003 7.8205V22.1895C-0.0003 26.8105 3.1587 30.0095 7.6697 30.0095ZM7.6697 25.5115C5.6597 25.5115 4.5257 24.2945 4.5257 22.1895V7.8065C4.5257 5.7145 5.6597 4.5115 7.6697 4.5115H18.7987C20.7947 4.5115 21.9437 5.7145 21.9437 7.8065V22.1895C21.9437 24.2945 20.7947 25.5115 18.7987 25.5115ZM11.1157 16.4195C12.0727 17.2405 13.1937 17.2125 14.0957 16.4195L18.9767 12.1815C19.8787 11.3885 19.7557 10.2815 19.1267 9.5845C18.5117 8.9005 17.4457 8.5855 16.4747 9.4475L12.6057 12.7965L10.4727 10.9925C9.7067 10.3495 8.5727 10.4455 7.8747 11.2385C7.1777 11.9905 7.2867 13.1795 8.0797 13.8495Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.482421875 28.0546875"
          className={className}
        >
          <path
            d="              M6.9047 28.0551H17.6777C21.8477 28.0551 24.5817 25.2791 24.5817 21.0141V12.7691H24.8147C25.8267 12.7691 26.4827 12.0721 26.4827 10.9781V8.6951C26.4827 7.6011 25.8267 6.8911 24.8147 6.8911H24.5817C24.5137 2.6931 21.8067 0.0001 17.6777 0.0001H6.9047C2.7347 0.0001 -0.0003 2.7621 -0.0003 7.0141V21.0141C-0.0003 25.2791 2.7347 28.0551 6.9047 28.0551ZM6.8497 24.7051C4.6487 24.7051 3.3637 23.3651 3.3637 21.0681V7.0001C3.3637 4.7171 4.6487 3.3911 6.8497 3.3911H17.7187C19.9337 3.3911 21.2187 4.7171 21.2187 7.0001V21.0681C21.2187 23.3651 19.9337 24.7051 17.7187 24.7051ZM10.4867 15.2171C11.3067 15.9001 12.1817 15.8871 12.9747 15.2171L18.2247 10.6231C18.8947 10.0491 18.8267 9.1741 18.3067 8.6131C17.8147 8.0801 16.9667 7.9301 16.2697 8.5451L11.7167 12.4821L9.0777 10.2401C8.4767 9.7341 7.5877 9.8161 7.0547 10.4181C6.5217 11.0191 6.6177 11.9351 7.2327 12.4551Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.521484375 29.080078125"
          className={className}
        >
          <path
            d="              M7.3147 29.0796H18.2657C22.6267 29.0796 25.5667 26.0856 25.5667 21.6286V13.3846H25.7307C26.8247 13.3846 27.5217 12.6326 27.5217 11.4706V9.1736C27.5217 8.0116 26.8247 7.2456 25.7307 7.2456H25.5667C25.4847 2.9116 22.5587 -0.0004 18.2657 -0.0004H7.3147C2.9527 -0.0004 -0.0003 2.9946 -0.0003 7.4376V21.6286C-0.0003 26.0856 2.9527 29.0796 7.3147 29.0796ZM7.2867 25.1286C5.1817 25.1286 3.9787 23.8576 3.9787 21.6566V7.4236C3.9787 5.2496 5.1817 3.9786 7.2867 3.9786H18.2927C20.3847 3.9786 21.6017 5.2496 21.6017 7.4236V21.6566C21.6017 23.8576 20.3847 25.1286 18.2927 25.1286ZM10.8277 15.8456C11.7167 16.6116 12.7147 16.5836 13.5627 15.8456L18.6207 11.4436C19.4137 10.7596 19.3187 9.7616 18.7437 9.1326C18.1837 8.5036 17.2267 8.2716 16.3787 9.0236L12.1817 12.6466L9.8167 10.6366C9.1327 10.0626 8.1077 10.1446 7.4927 10.8556C6.8637 11.5386 6.9727 12.5916 7.6697 13.1936Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.666015625 25.416015625"
          className={className}
        >
          <path
            d="              M5.9607 25.4156H16.0367C19.7427 25.4156 21.9977 23.1466 21.9977 19.3726V11.2926H22.3397C23.1467 11.2926 23.6657 10.7186 23.6657 9.8436V7.4646C23.6657 6.5766 23.1467 6.0156 22.3397 6.0156H21.9977C21.9977 2.2696 19.7427 -0.0004 16.0367 -0.0004H5.9607C2.2557 -0.0004 -0.0003 2.2696 -0.0003 6.0296V19.3726C-0.0003 23.1466 2.2557 25.4156 5.9607 25.4156ZM5.9067 23.7206C3.2677 23.7206 1.6957 22.1346 1.6957 19.4416V6.0156C1.6957 3.3226 3.2677 1.7366 5.9067 1.7366H16.0917C18.7307 1.7366 20.3027 3.3226 20.3027 6.0156V19.4416C20.3027 22.1346 18.7307 23.7206 16.0917 23.7206ZM9.7617 13.4666C10.3637 13.9726 10.8827 13.9726 11.4567 13.4666L17.1717 8.4906C17.4867 8.2036 17.4997 7.7106 17.1997 7.3826C16.8987 7.0686 16.4067 7.0546 16.0507 7.3826L10.6097 12.1136L7.3007 9.2966C6.9727 9.0096 6.4667 9.0646 6.1797 9.3926C5.8787 9.7346 5.9477 10.2266 6.2887 10.5276Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.2109375 26.810546875"
          className={className}
        >
          <path
            d="              M6.4117 26.8109H16.9527C20.9177 26.8109 23.3657 24.3219 23.3657 20.2759V12.0449H23.6937C24.6227 12.0449 25.2107 11.4019 25.2107 10.4039V8.1209C25.2107 7.1099 24.6227 6.4669 23.6937 6.4669H23.3657C23.3657 2.4879 20.9177 -0.0001 16.9527 -0.0001H6.4117C2.4607 -0.0001 -0.0003 2.4879 -0.0003 6.5219V20.2759C-0.0003 24.3219 2.4607 26.8109 6.4117 26.8109ZM6.3437 24.1989C3.9927 24.1989 2.6247 22.7769 2.6247 20.3579V6.4939C2.6247 4.0879 3.9927 2.6799 6.3437 2.6799H17.0347C19.3727 2.6799 20.7537 4.0879 20.7537 6.4939V20.3579C20.7537 22.7769 19.3727 24.1989 17.0347 24.1989ZM10.0897 14.4509C10.8277 15.0669 11.5387 15.0669 12.2497 14.4509L17.7457 9.6519C18.2517 9.2149 18.2387 8.4769 17.7867 8.0119C17.3637 7.5739 16.6657 7.5059 16.1327 7.9849L11.1567 12.3049L8.1757 9.7619C7.6977 9.3519 6.9587 9.4339 6.5347 9.9119C6.1117 10.4039 6.1937 11.1429 6.6857 11.5669Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.5 26.11328125"
          className={className}
        >
          <path
            d="              M6.1387 26.1134H16.5567C20.3987 26.1134 22.6957 23.7754 22.6957 19.8654V11.6214H23.0647C23.9397 11.6214 24.4997 11.0194 24.4997 10.0764V7.7934C24.4997 6.8224 23.9397 6.2204 23.0647 6.2204H22.6957C22.6957 2.3244 20.3987 0.0004 16.5567 0.0004H6.1387C2.2967 0.0004 -0.0003 2.3244 -0.0003 6.2344V19.8654C-0.0003 23.7754 2.2967 26.1134 6.1387 26.1134ZM6.0427 23.9124C3.6367 23.9124 2.2017 22.4494 2.2017 19.9614V6.2074C2.2017 3.7324 3.6367 2.2694 6.0427 2.2694H16.6527C19.0727 2.2694 20.4937 3.7324 20.4937 6.2074V19.9614C20.4937 22.4494 19.0727 23.9124 16.6527 23.9124ZM9.8707 14.0134C10.5547 14.5874 11.1837 14.5874 11.8397 14.0134L17.4867 9.0914C17.8967 8.7224 17.8967 8.0804 17.4997 7.6704C17.1037 7.2734 16.5017 7.2734 16.0507 7.6704L10.8417 12.1814L7.6697 9.4884C7.2597 9.1324 6.6037 9.2014 6.2477 9.6114C5.8787 10.0484 5.9477 10.6914 6.3847 11.0604Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.7578125 27.357421875"
          className={className}
        >
          <path
            d="              M6.6307 27.3573H17.2677C21.3277 27.3573 23.8987 24.7463 23.8987 20.6033V12.3593H24.1857C25.1427 12.3593 25.7577 11.7033 25.7577 10.6643V8.3673C25.7577 7.3283 25.1427 6.6583 24.1857 6.6583H23.8987C23.8987 2.6113 21.3277 0.0003 17.2677 0.0003H6.6307C2.5707 0.0003 -0.0003 2.6113 -0.0003 6.7403V20.6033C-0.0003 24.7463 2.5707 27.3573 6.6307 27.3573ZM6.5627 24.4183C4.2797 24.4183 2.9397 23.0373 2.9397 20.6723V6.7263C2.9397 4.3753 4.2797 2.9943 6.5627 2.9943H17.3357C19.6187 2.9943 20.9587 4.3753 20.9587 6.7263V20.6723C20.9587 23.0373 19.6187 24.4183 17.3357 24.4183ZM10.2677 14.7793C11.0337 15.4353 11.8267 15.4223 12.5647 14.7793L17.9517 10.0763C18.5257 9.5843 18.4847 8.7913 18.0197 8.2853C17.5547 7.7933 16.8027 7.6973 16.1877 8.2303L11.4027 12.3863L8.5587 9.9803C8.0387 9.5293 7.2327 9.5973 6.7677 10.1313C6.2887 10.6773 6.3707 11.4843 6.9177 11.9633Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.544921875 24.486328125"
          className={className}
        >
          <path
            d="              M5.7287 24.4868H15.3397C18.8947 24.4868 21.0687 22.2987 21.0687 18.7308V10.8418H21.3687C22.0937 10.8418 22.5447 10.3088 22.5447 9.5158V7.0278C22.5447 6.2478 22.0937 5.7288 21.3687 5.7288H21.0687C21.0687 2.1878 18.8947 -0.0003 15.3397 -0.0003H5.7287C2.1877 -0.0003 -0.0003 2.1878 -0.0003 5.7418V18.7308C-0.0003 22.2987 2.1877 24.4868 5.7287 24.4868ZM5.7147 23.4608C2.7757 23.4608 1.0257 21.7108 1.0257 18.7438V5.7418C1.0257 2.7888 2.7757 1.0257 5.7147 1.0257H15.3537C18.2927 1.0257 20.0567 2.7888 20.0567 5.7418V18.7438C20.0567 21.7108 18.2927 23.4608 15.3537 23.4608ZM9.6247 12.7288C10.1177 13.1388 10.4727 13.1388 10.9517 12.7288L16.7617 7.6698C16.9527 7.5058 16.9807 7.2188 16.8167 6.9868C16.6247 6.7808 16.2967 6.7678 16.0507 6.9868L10.2947 12.0178L6.7947 9.0368C6.5897 8.8458 6.2757 8.8867 6.0977 9.0778C5.8927 9.3108 5.9337 9.5978 6.1657 9.8028Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.984375 24.0078125"
          className={className}
        >
          <path
            d="              M5.6187 24.0073H14.9847C18.4437 24.0073 20.5897 21.8613 20.5897 18.4023V10.6093H20.8637C21.5467 10.6093 21.9847 10.1033 21.9847 9.3653V6.8083C21.9847 6.0843 21.5467 5.5913 20.8637 5.5913H20.5897C20.5897 2.1463 18.4437 0.0003 14.9847 0.0003H5.6187C2.1467 0.0003 -0.0003 2.1463 -0.0003 5.6053V18.4023C-0.0003 21.8613 2.1467 24.0073 5.6187 24.0073ZM5.6187 23.3383C2.5297 23.3383 0.6697 21.5063 0.6697 18.4023V5.6053C0.6697 2.5153 2.5297 0.6703 5.6187 0.6703H14.9847C18.0607 0.6703 19.9197 2.5153 19.9197 5.6053V18.4023C19.9197 21.5063 18.0607 23.3383 14.9847 23.3383ZM9.5567 12.3593C9.9937 12.7283 10.2677 12.7283 10.6917 12.3593L16.5427 7.2593C16.6797 7.1503 16.7207 6.9593 16.6247 6.7953C16.4887 6.6443 16.2427 6.6173 16.0367 6.7953L10.1307 11.9633L6.5487 8.9143C6.3987 8.7773 6.1797 8.7913 6.0567 8.9273C5.9067 9.0913 5.9337 9.2833 6.1117 9.4333Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
