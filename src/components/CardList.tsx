import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { isOpen, onOpen, onClose } = useDisclosure()
  // TODO SELECTED IMAGE URL STATE
  const [imageURL, setImageURL] = useState()

  // TODO FUNCTION HANDLE VIEW IMAGE
  function handleViewImage(urlImage) {
    console.log('cliquei', urlImage)
    onOpen()
    setImageURL(urlImage)
  }

  return (
    <>
      {/* TODO CARD GRID */}
      <SimpleGrid columns={3} spacing={'40px'}>
        {cards && cards.map(card => (
          <Card data={card} viewImage={handleViewImage} key={card.id} />
        ))}
      </SimpleGrid>

      {/* TODO MODALVIEWIMAGE */}
      <ModalViewImage imgUrl={imageURL} isOpen={isOpen} onClose={onClose} />
    </>
  );
}
