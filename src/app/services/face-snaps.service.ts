import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[]=[
     {
     id:1,
     title: 'plage Navagio en Grèce',
     description:"Explorez la splendeur naturelle de la plage Navagio en Grèce, un joyau caché aux eaux cristallines et au sable blanc immaculé, nichée entre d'imposantes falaises calcaires. Avec son épave légendaire échouée sur le rivage, cette plage pittoresque offre un cadre unique pour les voyageurs en quête d'aventure et de beauté enchanteresse.",
     imageUrl: 'https://img.itinari.com/pages/images/original/3f3c7cfe-9426-417a-adf7-0b42d8d6df10-istock-611174546.jpg?ch=DPR&dpr=2.625&w=1200&h=800&s=99cf6d6662aae58ffdb0d0c203c7e1fb',
     createDate: new Date(),
     snaps:350,
    location:'Grece'
     },
    
     {
    id:2,
     title:'Plage Hawai',
     description:"Bienvenue sur la magnifique plage d'Hawaï, où le sable doré s'étend à perte de vue, caressé par les douces vagues d'un océan turquoise scintillant sous le soleil éclatant, offrant un paradis tropical idyllique pour les amoureux de la nature et les adeptes de farniente",
     imageUrl:'https://www.costacroisieres.fr/content/dam/costa/costa-magazine/article-images/hawaii-beaches/6-spiaggia-waikiki.jpg.image.694.390.low.jpg',
     createDate:new Date(),
     snaps:102,
     location:'Hawai'
    },
    
    {
    id:3,
    title: 'Solenzara Plage',
    description:"Bienvenue sur la magnifique plage de Solenzara en Corse, un véritable trésor méditerranéen qui séduit par sa beauté naturelle préservée. Avec ses eaux limpides aux teintes turquoise, cette plage offre une baignade rafraîchissante dans un cadre idyllique. Le sable fin et doré s'étend à perte de vue, invitant à de longues balades en bord de mer ou à des moments de détente sous le doux soleil corse",
    imageUrl:'https://resize.elle.fr/original/var/plain_site/storage/images/loisirs/evasion/plage-corse/64297888-4-fre-FR/Les-cinq-plus-belles-plages-de-Corse-pour-des-vacances-paradisiaques.jpg',
    createDate:new Date(),
    snaps: 52
    },
    {
        id:4,
      title: 'plage Navagio en Grèce',
      description:"Explorez la splendeur naturelle de la plage Navagio en Grèce, un joyau caché aux eaux cristallines et au sable blanc immaculé, nichée entre d'imposantes falaises calcaires. Avec son épave légendaire échouée sur le rivage, cette plage pittoresque offre un cadre unique pour les voyageurs en quête d'aventure et de beauté enchanteresse.",
      imageUrl: 'https://img.itinari.com/pages/images/original/3f3c7cfe-9426-417a-adf7-0b42d8d6df10-istock-611174546.jpg?ch=DPR&dpr=2.625&w=1200&h=800&s=99cf6d6662aae58ffdb0d0c203c7e1fb',
      createDate: new Date(),
      snaps: 0,
      location:'Grece'
    },
    
    {
        id:5,
    title:'Plage Hawai',
    description:"Bienvenue sur la magnifique plage d'Hawaï, où le sable doré s'étend à perte de vue, caressé par les douces vagues d'un océan turquoise scintillant sous le soleil éclatant, offrant un paradis tropical idyllique pour les amoureux de la nature et les adeptes de farniente",
    imageUrl:'https://www.costacroisieres.fr/content/dam/costa/costa-magazine/article-images/hawaii-beaches/6-spiaggia-waikiki.jpg.image.694.390.low.jpg',
    createDate:new Date(),
    snaps:33,
    location:'Hawai'
    },
    
    {
    id:6,
    title: 'Solenzara Plage',
    description:"Bienvenue sur la magnifique plage de Solenzara en Corse, un véritable trésor méditerranéen qui séduit par sa beauté naturelle préservée. Avec ses eaux limpides aux teintes turquoise, cette plage offre une baignade rafraîchissante dans un cadre idyllique. Le sable fin et doré s'étend à perte de vue, invitant à de longues balades en bord de mer ou à des moments de détente sous le doux soleil corse",
    imageUrl:'https://resize.elle.fr/original/var/plain_site/storage/images/loisirs/evasion/plage-corse/64297888-4-fre-FR/Les-cinq-plus-belles-plages-de-Corse-pour-des-vacances-paradisiaques.jpg',
    createDate:new Date(),
    snaps: 14
    }
    
    ];

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }
    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }
      }
  
    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
        }
    }
    
