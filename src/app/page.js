import Landing from '@/components/Landing';
import Salah from './components/Salah';
import Quote from './components/Quote';

export default function Home() {
  return (
    <>
        <Landing title="مرحبا بكم في موقع موعظة" text="موقع إسلامي يوجد به القرآن الكريم وتفسير القران الكريم والحديث الشريف واذكار وأدعيه والاقتباسات الاسلاميه واوقات الصلاه والمزيد" />
        <Salah />
        <Quote />
    </>
  )
}
