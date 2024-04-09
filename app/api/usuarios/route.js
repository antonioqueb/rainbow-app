import { NextResponse } from "next/server"

const usuarios = [
  {
    id: 1,
    name: "Lola",
    username: "LolaDivinaMX"
    },
    {
    id: 2,
    name: "Valentina",
    username: "MissValenFierce"
    },
    {
    id: 3,
    name: "Cassandra",
    username: "LaCassandraSlay"
    },
    {
    id: 4,
    name: "Ximena",
    username: "XimenaLaSirena"
    },
    {
    id: 5,
    name: "Natalia",
    username: "NatyBelleza"
    },
    {
    id: 6,
    name: "Regina",
    username: "ReinaDelDrama"
    },
    {
    id: 7,
    name: "Sofía",
    username: "SoySofiaBoom"
    },
    {
    id: 8,
    name: "Fabiola",
    username: "FabiolaFuego"
    },
    {
    id: 9,
    name: "Daniela",
    username: "DaniDiosa"
    },
    {
    id: 10,
    name: "Luisa",
    username: "LaLuisaDeluxe"
    },
    {
    id: 11,
    name: "Isabella",
    username: "IsabellaQueenMX"
    },
    {
    id: 12,
    name: "Perla",
    username: "PerlaEnEscena"
    },
    {
    id: 13,
    name: "Violeta",
    username: "VioletaVibrante"
    },
    {
    id: 14,
    name: "Celeste",
    username: "CelesteLaLunar"
    },
    {
    id: 15,
    name: "Zafiro",
    username: "ZafiroMagica"
    },
    {
    id: 16,
    name: "Aurora",
    username: "AuroraBorealMX"
    },
    {
    id: 17,
    name: "Esmeralda",
    username: "LaEsmeraldaMX"
    },
    {
    id: 18,
    name: "Bianca",
    username: "BiancaLaBlanca"
    },
    {
    id: 19,
    name: "Ámbar",
    username: "AmbarPreciosa"
    },
    {
    id: 20,
    name: "Lilith",
    username: "LilithLaHechicera"
    }
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');

  if (username) {
      // Filtrar los usuarios por el username proporcionado
      const usuario = usuarios.find(user => user.username === username);
      
      if (usuario) {
          // Si se encuentra el usuario, devolverlo dentro de un objeto
          return NextResponse.json({ user: usuario });
      } else {
          // Si no se encuentra el usuario, devolver un 404
          return NextResponse.error(new Error('Usuario no encontrado'), { status: 404 });
      }
  } else {
      // Si no se proporciona un username, devolver todos los usuarios dentro de un objeto
      return NextResponse.json({ user: usuarios });
  }
}
