import { FastifyReply, FastifyRequest } from "fastify";
import { IUser } from "interfaces";

const staticUsers: IUser[] = [
  {
    id: 1,
    name: "Joyce Byers",
  },
];

export const listUsers = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  Promise.resolve(staticUsers).then((users) => {
    reply.send({ data: users });
  });
};

export const addUser = async (
  request: FastifyRequest<{ Body: IUser }>,
  reply: FastifyReply
) => {
  try {
    const newUser = request.body;
    newUser.id = staticUsers.length + 1;
    staticUsers.push(newUser);
    return Promise.resolve().then(() => {
      reply
        .code(201)
        .send({ message: "Utilisateur ajouté avec succès", data: newUser });
    });
  } catch (error) {
    return Promise.resolve().then(() => {
      reply
        .code(500)
        .send({ error: "Erreur lors de l'ajout de l'utilisateur" });
    });
  }
};

export const getUserById = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  const userId = parseInt(request.params.id, 10);
  const user = staticUsers.find((u) => u.id == userId);
  if (user) {
    return Promise.resolve().then(() => {
      reply.code(200).send({ data: user });
    });
  } else {
    return Promise.resolve().then(() => {
      reply.code(404).send({ message: "Utilisateur non trouvé !" });
    });
  }
};

export const updateUserById = async (
  request: FastifyRequest<{ Params: { id: string }; Body: Partial<IUser> }>,
  reply: FastifyReply
) => {
  const userId = parseInt(request.params.id, 10);
  const updatedUserData = request.body;
  const userIndex = staticUsers.findIndex((u) => u.id == userId);
  if (userIndex !== -1) {
    staticUsers[userIndex] = { ...staticUsers[userIndex], ...updatedUserData };
    return Promise.resolve().then(() => {
      reply
        .code(200)
        .send({
          data: staticUsers[userIndex],
          message: "Utilisateur mis à jour avec succés",
        });
    });
  } else {
    return Promise.resolve().then(() => {
      reply.code(404).send({ message: "Utilisateur non trouvé !" });
    });
  }
};
