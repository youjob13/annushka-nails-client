import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import * as leaflet from 'leaflet';
import { LatLngTuple } from 'leaflet';

@Component({
  selector: 'ann-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements AfterViewInit {
  private static readonly Coordinates = {
    lat: 53.551086,
    lng: 9.993682,
  };

  private map: leaflet.Map | undefined;

  private initMap(): void {
    const point: LatLngTuple = [
      MapComponent.Coordinates.lat,
      MapComponent.Coordinates.lng,
    ];

    this.map = leaflet.map('map', {
      center: point,
      zoom: 16,
      renderer: leaflet.canvas(),
    });

    const myIcon = leaflet.icon({
      iconUrl:
        'https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/map-marker-icon.png',
      iconSize: [38, 38],
      iconAnchor: [22, 37],
      popupAnchor: [-3, -76],
    });

    leaflet
      .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 10,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      })
      .addTo(this.map);

    leaflet.marker(point, { icon: myIcon }).addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
