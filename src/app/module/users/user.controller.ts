import { RequestHandler } from "express-serve-static-core";
import catchAsync from "../../../utils/catchAsync";
import { UserService } from "./user.services";
import { IUser } from "./user.interface";
import sendResponse from "../../../utils/sendResponse";
import httpStatus from "http-status";
import pick from "../../../utils/pick";

import { userSearchFilterOptions } from "./user.constant";
import { paginationFields } from "../../../constant/paginationFields";

const signup: RequestHandler = catchAsync(async (req, res, next) => {
  const userData = req.body;
  const result = await UserService.signup(userData);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User Signed up Successfully!",
    data: result,
  });
});

const getAllUsers: RequestHandler = catchAsync(async (req, res, next) => {
  const paginationOptions = pick(req.query, paginationFields);
  const searchFilterFields = pick(req.query, userSearchFilterOptions);
  const result = await UserService.getAllUsers(
    paginationOptions,
    searchFilterFields
  );

  sendResponse<IUser[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Users data Retrieved Successfully!",
    meta: result?.meta,
    data: result?.data,
  });
});

const getUser: RequestHandler = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await UserService.getUser(id);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User data Retrieved Successfully!",
    data: result,
  });
});

const updateUser: RequestHandler = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const userData = req.body;
  const result = await UserService.updateUser(id, userData);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User data Updated Successfully!",
    data: result,
  });
});

const deleteUser: RequestHandler = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await UserService.deleteUser(id);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User data Deleted Successfully!",
    data: result,
  });
});

export const UserController = {
  signup,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
};
