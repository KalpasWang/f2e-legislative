import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

type Props = {
  isOpen: boolean;
  onOpenChange: () => void;
};

const rule = {
  title: "政治獻金捐贈規定",
  list1: [
    "對單一擬參選人 （單位：新台幣）",
    "個人捐贈：10 萬元 / 年",
    "對不同擬參選人：年度總和不得超過 30 萬元",
    "營利事業：100 萬元 / 年",
    "對不同擬參選人：年度總和不得超過 200 萬元",
    "人民團體：50 萬元 / 年",
    "對不同擬參選人：年度總和不得超過 100 萬元",
  ],
  marked: [
    "任何人不得以本人以外名義捐贈或超過新台幣 1 萬元之匿名捐款。",
    "超過新台幣 10 萬元以上現金捐贈，應以「支票或經由郵局、銀行匯款」為之。",
  ],
  title2: ["不得捐贈政治獻金規定", "不得捐贈政治獻金之對象"],
  list2: [
    "外國人民、大陸地區人民、香港及澳門居民、台灣未具有選舉權之人，同一種選舉擬參選人。",
    "公營事業或政府持有資本達 20% 之民營企業。",
    "與政府機關/機構有巨額採購或重大公共建設投資契約，或與政黨經營或投資之事業有巨額採購契約，且在履約期間之廠商或個人。",
    "有累積虧損尚未依規定彌補之營利事業。",
    "政黨經營或投資之事業。",
    "財團法人、宗教團體。",
    "非本國國民擔任本國團體或法人之董事長職務。",
    "非本國國民占本國團體或法人之董事、監察人、執行業務或代表公司之股東等各項職務總名額超過 1/3 者。",
    "非本國國民占股份有限公司之股東權 30% 以上或無限公司、兩合公司、有限公司之股東及一般法人、團體之社員人數超過 1/3 以上。",
  ],
};

export default function DonateConfirmModal({ isOpen, onOpenChange }: Props) {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      scrollBehavior="outside"
      size="5xl"
      classNames={{
        closeButton: "hidden",
        body: "pl-12",
        footer: "justify-center gap-10",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="mb-unit-4 block">
              <h3 className="text-secondary text-center text-large font-normal leading-normal">
                政治獻金捐贈規定
              </h3>
            </ModalHeader>
            <ModalBody className="pb-unit-15 gap-0 text-sm leading-normal">
              <h3>{rule.title}</h3>
              {rule.list1.map((listItem, i) => (
                <p key={i}>
                  <span className="pr-2">{i + 1}.</span>
                  {listItem}
                </p>
              ))}
              {rule.marked.map((marked, i) => (
                <p key={i} className={i > 0 ? "mb-4" : ""}>
                  <span className="pr-2">＊</span>
                  {marked}
                </p>
              ))}
              <p> </p>
              {rule.title2.map((title, i) => (
                <p key={i}>{title}</p>
              ))}
              {rule.list2.map((listItem, i) => (
                <p key={i}>
                  <span className="pr-2">{i + 1}.</span>
                  {listItem}
                </p>
              ))}
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                size="lg"
                variant="bordered"
                className="text-foreground"
                onPress={onClose}
              >
                退出
              </Button>
              <Button
                color="primary"
                size="lg"
                variant="solid"
                onPress={onClose}
              >
                我同意
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
