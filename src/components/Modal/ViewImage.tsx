import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor="pGray.900" maxW='900px' maxH='600px' h={'auto'} w='auto'>
          <ModalBody p='0' >
            <Image src={imgUrl} maxW='900px' maxH='600px' backgroundSize={'cover'} />
          </ModalBody>

          <ModalFooter justifyContent={'flex-start'} py='8px' px='10px' borderBottomRadius='md' bgColor="pGray.900">
            <Link href={imgUrl} target='_blank' fontSize='14px'>Abrir original</Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
