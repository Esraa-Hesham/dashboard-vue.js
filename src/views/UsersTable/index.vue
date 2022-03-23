<template>
  <div class="user-table">
    <div class="container-xl">
      <div class="table-responsive">
        <div class="table-wrapper">
          <div class="table-title">
            <div class="row">
              <div class="col-sm-6">
                <h2>Manage <b>Users</b></h2>
              </div>
              <div class="col-sm-6">
                <b-button @click="addUserPopup()" class="btn add-user"
                  >Add New User</b-button
                >
              </div>
            </div>
          </div>
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.id">
                <td>{{ user.fullname }}</td>
                <td>{{ user.phone }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.password }}</td>
                <td>
                  <div class="d-flex">
                    <b-button class="btn btn-edit" @click="editUser(user.id)"
                      >Edit</b-button
                    >
                    <b-button
                      @click="deleteUserPopup(user.id)"
                      class="btn btn-delete"
                      >Delete</b-button
                    >
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Edit Modal HTML -->
    <b-modal id="my-modal" centered hide-footer>
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <div class="form-group">
              <label>Name</label>
              <input
                type="text"
                class="form-control"
                required
                v-model="userToAdd.fullname"
              />
            </div>
            <div class="form-group">
              <label>Phone</label>
              <input
                type="text"
                class="form-control"
                required
                v-model="userToAdd.phone"
              />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input
                type="email"
                class="form-control"
                required
                v-model="userToAdd.email"
              />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                required
                v-model="userToAdd.password"
              />
            </div>

            <button class="btn btn-save" @click="addUser(newIdUser)">
              Add
            </button>
          </div>
        </div>
      </div>
    </b-modal>
    <!-- Edit Modal HTML -->
    <b-modal id="my-modal-edit" centered hide-footer>
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <div class="form-group">
              <label>Name</label>
              <input
                type="text"
                class="form-control"
                required
                v-model="userToEdit.fullname"
              />
            </div>
            <div class="form-group">
              <label>Phone</label>
              <input
                type="text"
                class="form-control"
                required
                v-model="userToEdit.phone"
              />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input
                type="email"
                class="form-control"
                required
                v-model="userToEdit.email"
              />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                required
                v-model="userToEdit.password"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-save" @click="setEditedUser(userToEdit.id)">
              Save
            </button>
          </div>
        </div>
      </div>
    </b-modal>
    <!-- Delete Modal HTML -->
    <b-modal id="my-modal2" centered hide-footer>
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <p>Are you sure you want to delete these Records?</p>
            <p class="text-warning">
              <small>This action cannot be undone.</small>
            </p>

            <button
              class="btn btn-delete2"
              @click="deleteUser(userToDelete.id)"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "UsersTable",
  data() {
    return {
      userToEdit: {},
      userToDelete: {},
      userToAdd: {},
    };
  },
  computed: {
    users() {
      return this.$store.getters.getUsers;
    },
    newIdUser() {
      return this.$store.getters.newId;
    },
  },
  methods: {
    editUser(userId) {
      this.users.forEach((user) => {
        if (user.id == userId) {
          this.userToEdit = Object.assign({}, user);
        }
      });
      //   my-modal-edit
      this.$bvModal.show("my-modal-edit");
    },
    setEditedUser(userId) {
      this.$store.commit("setUser", this.userToEdit);
      this.$bvModal.hide("my-modal-edit");
    },
    deleteUser(userId) {
      this.$store.commit(
        "setUsers",
        this.users.filter((user) => {
          return user.id != userId;
        })
      );
      this.$bvModal.hide("my-modal2");
    },
    deleteUserPopup(userId) {
      this.users.forEach((user) => {
        if (user.id == userId) {
          this.userToDelete = Object.assign({}, user);
        }
      });
      //   my-modal-edit
      this.$bvModal.show("my-modal2");
    },
    addUser(userId) {
      console.log(this.userToAdd);
      let x = this.users.slice();
      x.push(this.userToAdd);
      console.log(x);
      this.$store.commit("setUsers", x);
      this.$bvModal.hide("my-modal");
    },
    addUserPopup() {
      this.userToAdd = {};
      //   my-modal-edit
      this.$bvModal.show("my-modal");
    },
  },
};
</script>

<style scoped>
body {
  color: #566787;
  background: #f5f5f5;
  font-family: "Varela Round", sans-serif;
  font-size: 13px;
}
.table-responsive {
  margin: 30px 0;
}
.table-wrapper {
  background: #fff;
  padding: 20px 25px;
  border-radius: 3px;
  min-width: 1000px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
.table-title {
  padding-bottom: 15px;
  background: #d8a1d5;
  color: #fff;
  padding: 16px 30px;
  min-width: 100%;
  margin: -20px -25px 10px;
  border-radius: 3px 3px 0 0;
}
.table-title h2 {
  margin: 5px 0 0;
  font-size: 24px;
}
.table-title .btn-group {
  float: right;
}
.table-title .btn {
  color: #fff;
  float: right;
  font-size: 13px;
  border-color: transparent;
  min-width: 50px;
  border-radius: 10px;
  outline: none !important;
  margin-left: 10px;
}
.table-title .btn i {
  float: left;
  font-size: 21px;
  margin-right: 5px;
}
.table-title .btn span {
  float: left;
  margin-top: 2px;
}
table.table tr th,
table.table tr td {
  border-color: #e9e9e9;
  padding: 12px 15px;
  vertical-align: middle;
}
table.table tr th:first-child {
  width: 60px;
}
table.table tr th:last-child {
  width: 100px;
}
table.table-striped tbody tr:nth-of-type(odd) {
  background-color: #fcfcfc;
}
table.table-striped.table-hover tbody tr:hover {
  background: #f5f5f5;
}
table.table th i {
  font-size: 13px;
  margin: 0 5px;
  cursor: pointer;
}
table.table td:last-child i {
  opacity: 0.9;
  font-size: 22px;
  margin: 0 5px;
}

/* Modal styles */
.modal .modal-dialog {
  max-width: 400px;
}
.modal .modal-header,
.modal .modal-body,
.modal .modal-footer {
  padding: 20px 30px;
}
.modal .modal-content {
  border-radius: 3px;
  font-size: 14px;
}
.modal .modal-footer {
  background: #ecf0f1;
  border-radius: 0 0 3px 3px;
}
.modal .modal-title {
  display: inline-block;
}
.modal .form-control {
  border-radius: 2px;
  box-shadow: none;
  border-color: #dddddd;
}
.modal textarea.form-control {
  resize: vertical;
}
.modal .btn {
  border-radius: 10px;
  min-width: 100px;
}
.modal form label {
  font-weight: normal;
}
.add-user,
.add-user:hover {
  background-color: #036e03;
  transition: 0.3ms;
}
.btn-delete,
.btn-delete:hover {
  background-color: #f71919;
}
.btn-edit,
.btn-edit:hover {
  background-color: #f1f512;
  margin-right: 10px;
}
.btn-save,
.btn-save:hover {
  background-color: #f15cea;
  width: 100%;
  margin-top: 10px;
}
.btn-delete2,
.btn-delete2:hover {
  background-color: #f71919;
  width: 100%;
  margin-top: 10px;
}
.btn-secondary,
.btn-secondary:hover {
  border-color: transparent;
}
.close {
  background-color: black;
}
</style>
